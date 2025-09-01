import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  isHomeRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateRouteState(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateRouteState(event.urlAfterRedirects);
      }
    });
  }

  private updateRouteState(url: string): void {
    const cleanUrl = url.split("?")[0].split("#")[0];
    this.isHomeRoute = cleanUrl === "/" || cleanUrl === "";
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
  }
}
