import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

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

  constructor(
    private elementRef: ElementRef,
    private translate: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Close mobile menu on route change or page refresh
    this.closeMobileMenu();
    const savedLanguageCode = localStorage.getItem("lang") || "en";
    const detectedLanguage =
      this.languages.find((l) => l.code === savedLanguageCode) ||
      this.languages[0];
    this.selectedLanguage = detectedLanguage;
    this.translate.setDefaultLang("en");
    this.translate.use(detectedLanguage.code);
    document.documentElement.dir =
      detectedLanguage.code === "ar" ? "rtl" : "ltr";
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
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if it's open
      this.closeMobileMenu();
    }
  }
}
