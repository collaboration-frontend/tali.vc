import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
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

  languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  selectedLanguage: Language = this.languages[0];

  constructor(
    private elementRef: ElementRef,
    private translate: TranslateService
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
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: Event): void {
    // Close mobile menu when clicking outside
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMobileMenu();
      this.closeLanguageDropdown();
    }
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
