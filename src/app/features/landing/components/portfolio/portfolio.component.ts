import { Component, inject } from "@angular/core";
import { NgFor } from "@angular/common";
import { PortfolioItemCardComponent } from "./item-card/item-card.component";
import { TranslateModule } from "@ngx-translate/core";
import { AccessibilityService } from "../../../../core/services/accessibility.service";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [PortfolioItemCardComponent, NgFor, TranslateModule],
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent {
  private accessibilityService = inject(AccessibilityService);

  portfolioItems: any[] = [
    {
      id: 'tarmeez',
      title: "Tarmeez",
      description: "portfolio.items.tarmeez.description",
      sector: "investmentFocus.areas.fintech",
      investmentYear: 2022,
      imageUrl: "assets/icons/tarmeez.svg",
      website: "https://tarmeez.co",
    },
    {
      id: 'graphiant',
      title: "Graphiant",
      description: "portfolio.items.graphiant.description",
      sector: "investmentFocus.areas.network",
      investmentYear: 2022,
      imageUrl: "assets/images/graphiantp.png",
      website: "https://www.graphiant.com",
    },
    {
      id: 'nile',
      title: "Nile",
      description: "portfolio.items.nile.description",
      sector: "investmentFocus.areas.itServices",
      investmentYear: 2022,
      imageUrl: "assets/images/nile-logo.png",
      website: "https://nilesecure.com",
    },
    {
      id: 'rewaa',
      title: "Rewaa",
      description: "portfolio.items.rewaa.description",
      sector: "investmentFocus.areas.cloud",
      investmentYear: 2021,
      imageUrl: "assets/icons/rewaa.svg",
      website: "https://www.rewaatech.com",
    },
    {
      id: 'nearpay',
      title: "NearPay",
      description: "portfolio.items.nearpay.description",
      sector: "investmentFocus.areas.fintech",
      investmentYear: 2023,
      imageUrl: "assets/icons/nearpay.svg",
      website: "https://www.nearpay.io",
    },
    {
      id: 'celona',
      title: "Celona",
      description: "portfolio.items.celona.description",
      sector: "investmentFocus.areas.itServices",
      investmentYear: 2022,
      imageUrl: "assets/icons/celona.svg",
      website: "https://www.celona.io",
    },
    {
      id: 'northladder',
      title: "Northladder",
      description: "portfolio.items.northladder.description",
      sector: "investmentFocus.areas.itServices",
      investmentYear: 2023,
      imageUrl: "assets/icons/nothladder.svg",
      website: "https://www.northladder.com",
    },
    {
      id: 'cohere',
      title: "Cohere",
      description: "portfolio.items.cohere.description",
      sector: "investmentFocus.areas.ai",
      investmentYear: 2022,
      imageUrl: "assets/icons/cohere.svg",
      website: "https://cohere.com",
    },
  ];

  trackByPortfolioItem(index: number, item: any): string {
    return item.id || item.title || index.toString();
  }

  onPortfolioItemFocus(item: any): void {
    this.accessibilityService.announceToScreenReader(
      `Portfolio company: ${item.title}, sector: ${item.sector}, invested in ${item.investmentYear}`
    );
  }
}
