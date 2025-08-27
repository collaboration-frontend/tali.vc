import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PortfolioItemCardComponent } from './item-card/item-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemCardComponent, NgFor, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolioItems: any[] = [
    {
      title: 'Nile',
      description: 'portfolio.items.nile.description',
      sector: 'investmentFocus.areas.itServices',
      investmentYear: 2022,
      imageUrl: 'assets/images/portfolio-image.png',
      website: 'https://nilesecure.com'
    },
    {
      title: 'Rewaa',
      description: 'portfolio.items.rewaa.description',
      sector: 'investmentFocus.areas.cloud',
      investmentYear: 2021,
      imageUrl: 'assets/icons/rewaa.svg',
      website: 'https://www.rewaatech.com'
    },
    {
      title: 'NearPay',
      description: 'portfolio.items.nearpay.description',
      sector: 'investmentFocus.areas.fintech',
      investmentYear: 2023,
      imageUrl: 'assets/icons/nearpay.svg',
      website: 'https://www.nearpay.io'
    },
    {
      title: 'Celona',
      description: 'portfolio.items.celona.description',
      sector: 'investmentFocus.areas.itServices',
      investmentYear: 2022,
      imageUrl: 'assets/icons/celona.svg',
      website: 'https://www.celona.io'
    },
    {
      title: 'Northladder',
      description: 'portfolio.items.northladder.description',
      sector: 'investmentFocus.areas.itServices',
      investmentYear: 2023,
      imageUrl: 'assets/icons/nothladder.svg',
      website: 'https://www.northladder.com'
    },
    {
      title: 'Cohere',
      description: 'portfolio.items.cohere.description',
      sector: 'investmentFocus.areas.ai',
      investmentYear: 2022,
      imageUrl: 'assets/icons/cohere.svg',
      website: 'https://cohere.com'
    }
  ];
}
