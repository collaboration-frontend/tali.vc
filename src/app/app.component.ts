import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "new-tali";

  constructor(private meta: Meta) {
    // For i18n routes, add noindex
    if (window.location.pathname.includes("/i18n/")) {
      this.meta.addTag({ name: "robots", content: "noindex, nofollow" });
    }
  }
}
