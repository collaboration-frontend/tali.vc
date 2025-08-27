import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isLanguageDropdownOpen = false;
  
  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];
  
  selectedLanguage: Language = this.languages[0];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Close mobile menu on route change or page refresh
    this.closeMobileMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Close mobile menu when clicking outside
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMobileMenu();
      this.closeLanguageDropdown();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    // Close mobile menu on screen resize to desktop
    if (window.innerWidth >= 1024) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Close mobile menu on scroll
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
    // Close language dropdown on scroll
    if (this.isLanguageDropdownOpen) {
      this.closeLanguageDropdown();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  closeLanguageDropdown(): void {
    this.isLanguageDropdownOpen = false;
  }


  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
