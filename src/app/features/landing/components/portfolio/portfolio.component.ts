import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PortfolioItemCardComponent } from './item-card/item-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemCardComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolioItems: any[] = [
    {
      title: 'nile',
      description: 'Providing network independence through a very simple system; It was designed from the beginning to take care of itself, prevent threats, and improve productivity and convenience for customers.',
      sector: 'IT',
      investmentYear: 2022,
      imageUrl: 'assets/images/portfolio-image.png'
    },
    {
      title: 'rewwa',
      description: 'Providing network independence through a very simple system; It was designed from the beginning to take care of itself, prevent threats, and improve productivity and convenience for customers.',
      sector: 'Cloud',
      investmentYear: 2021,
      imageUrl: 'assets/icons/rewaa.svg'
    },
    {
      title: 'nearpay',
      description: 'Providing network independence through a very simple system; It was designed from the beginning to take care of itself, prevent threats, and improve productivity and convenience for customers.',
      sector: 'FinTech',
      investmentYear: 2023,
      imageUrl: 'assets/icons/nearpay.svg'
    },
    {
      title: 'celona',
      description: 'Providing network independence through a very simple system; It was designed from the beginning to take care of itself, prevent threats, and improve productivity and convenience for customers.',
      sector: 'IT',
      investmentYear: 2022,
      imageUrl: 'assets/icons/celona.svg'
    },
    {
      title: 'NorthLadder',
      description: 'Providing network independence through a very simple system; It was designed from the beginning to take care of itself, prevent threats, and improve productivity and convenience for customers.',
      sector: 'IT',
      investmentYear: 2023,
      imageUrl: 'assets/icons/nothladder.svg'
    },
    {
      title: 'cohere',
      description: 'Providing network independence through a very simple system; It was designed from the beginning to take care of itself, prevent threats, and improve productivity and convenience for customers.',
      sector: 'Ai',
      investmentYear: 2022,
      imageUrl: 'assets/icons/cohere.svg'
    }
  ];
}
