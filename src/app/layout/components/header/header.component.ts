import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AccessibilityService } from "../../../core/services/accessibility.service";

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isLanguageDropdownOpen = false;
  isScrolled = false;
  isHomeRoute = false;

  languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  selectedLanguage: Language = this.languages[0];
  private focusedIndex = -1;
  private menuItems: HTMLElement[] = [];

  constructor(
    private elementRef: ElementRef, 
    private translate: TranslateService, 
    private router: Router,
    private accessibilityService: AccessibilityService
  ) {}

  ngOnInit(): void {
    // Close mobile menu on route change or page refresh
    this.closeMobileMenu();
    const savedLanguageCode = localStorage.getItem("lang") || "en";
    const detectedLanguage = this.languages.find((l) => l.code === savedLanguageCode) || this.languages[0];
    this.selectedLanguage = detectedLanguage;
    this.translate.setDefaultLang("en");
    this.translate.use(detectedLanguage.code);
    document.documentElement.dir = detectedLanguage.code === "ar" ? "rtl" : "ltr";
    // Initialize scrolled state on load
    this.isScrolled = window.scrollY > 10;

    // Initialize route state and subscribe to route changes
    this.updateRouteState(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateRouteState(event.urlAfterRedirects);
      }
    });
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: Event): void {
    // Close mobile menu when clicking outside
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMobileMenu();
      this.closeLanguageDropdown();
    }
  }

  private updateRouteState(url: string): void {
    const cleanUrl = url.split("?")[0].split("#")[0];
    this.isHomeRoute = cleanUrl === "/" || cleanUrl === "";
  }

  @HostListener("window:resize", ["$event"])
  onResize(): void {
    // Close mobile menu on screen resize to desktop
    if (window.innerWidth >= 1024) {
      this.closeMobileMenu();
    }
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(): void {
    // Close mobile menu on scroll
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
    // Close language dropdown on scroll
    if (this.isLanguageDropdownOpen) {
      this.closeLanguageDropdown();
    }
    // Update header background based on scroll position
    this.isScrolled = window.scrollY > 10;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = "";
  }

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  closeLanguageDropdown(): void {
    this.isLanguageDropdownOpen = false;
  }

  selectLanguage(language: Language): void {
    if (this.selectedLanguage.code === language.code) {
      this.closeLanguageDropdown();
      return;
    }
    this.selectedLanguage = language;
    this.translate.use(language.code);
    localStorage.setItem("lang", language.code);
    document.documentElement.dir = language.code === "ar" ? "rtl" : "ltr";
    this.closeLanguageDropdown();
    
    // Announce language change to screen readers
    this.accessibilityService.announceToScreenReader(
      `Language changed to ${language.name}`
    );
  }

  onLanguageKeydown(event: KeyboardEvent, language: Language): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectLanguage(language);
    } else if (event.key === 'Escape') {
      this.closeLanguageDropdown();
      // Return focus to language button
      const languageButton = this.elementRef.nativeElement.querySelector('[aria-haspopup="true"]');
      if (languageButton) {
        languageButton.focus();
      }
    }
  }

  onMobileMenuKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMobileMenu();
      // Return focus to menu button
      const menuButton = this.elementRef.nativeElement.querySelector('[aria-controls="mobile-menu"]');
      if (menuButton) {
        menuButton.focus();
      }
    }
  }

  onNavigationKeydown(event: KeyboardEvent, targetElement: HTMLElement): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      targetElement.click();
    }
  }

  private updateFocusIndex(direction: 'next' | 'previous'): void {
    const menuItems = Array.from(
      this.elementRef.nativeElement.querySelectorAll('[role="menuitem"]')
    ) as HTMLElement[];

    if (menuItems.length === 0) return;

    if (direction === 'next') {
      this.focusedIndex = (this.focusedIndex + 1) % menuItems.length;
    } else {
      this.focusedIndex = this.focusedIndex <= 0 ? menuItems.length - 1 : this.focusedIndex - 1;
    }

    menuItems[this.focusedIndex]?.focus();
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const performSmoothScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (!this.isHomeRoute) {
      this.router.navigateByUrl("/").then(() => {
        setTimeout(() => {
          performSmoothScroll();
        }, 50);
      });
    } else {
      performSmoothScroll();
    }
    // Close mobile menu if it's open
    this.closeMobileMenu();
  }
}
