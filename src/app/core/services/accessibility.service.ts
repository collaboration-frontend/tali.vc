import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {
  private focusedElementSubject = new BehaviorSubject<HTMLElement | null>(null);
  public focusedElement$ = this.focusedElementSubject.asObservable();

  private isReducedMotionSubject = new BehaviorSubject<boolean>(this.checkReducedMotion());
  public isReducedMotion$ = this.isReducedMotionSubject.asObservable();

  private highContrastSubject = new BehaviorSubject<boolean>(false);
  public highContrast$ = this.highContrastSubject.asObservable();

  constructor() {
    this.initializeAccessibilityFeatures();
  }

  private initializeAccessibilityFeatures(): void {
    // Listen for prefers-reduced-motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', () => {
      this.isReducedMotionSubject.next(mediaQuery.matches);
    });

    // Set up skip links
    this.setupSkipLinks();
  }

  private checkReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private setupSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary-100 focus:text-white focus:p-4';
    skipLink.addEventListener('click', this.skipToMainContent);
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private skipToMainContent(event: Event): void {
    event.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  }

  // Focus management
  public setFocusToElement(element: HTMLElement): void {
    if (element) {
      element.focus();
      this.focusedElementSubject.next(element);
    }
  }

  public trapFocus(containerElement: HTMLElement): void {
    const focusableElements = containerElement.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    containerElement.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });

    // Set initial focus
    if (firstElement) {
      firstElement.focus();
    }
  }

  public announceToScreenReader(message: string): void {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = message;
    
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }

  public toggleHighContrast(): void {
    const currentValue = this.highContrastSubject.value;
    this.highContrastSubject.next(!currentValue);
    
    if (!currentValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }

  // Keyboard navigation helpers
  public handleArrowKeyNavigation(
    event: KeyboardEvent, 
    items: HTMLElement[], 
    currentIndex: number
  ): number {
    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = items.length - 1;
        break;
    }
    
    if (newIndex !== currentIndex && items[newIndex]) {
      items[newIndex].focus();
    }
    
    return newIndex;
  }

  // ARIA helpers
  public updateAriaLabel(element: HTMLElement, label: string): void {
    element.setAttribute('aria-label', label);
  }

  public updateAriaExpanded(element: HTMLElement, expanded: boolean): void {
    element.setAttribute('aria-expanded', expanded.toString());
  }

  public updateAriaSelected(element: HTMLElement, selected: boolean): void {
    element.setAttribute('aria-selected', selected.toString());
  }
}
