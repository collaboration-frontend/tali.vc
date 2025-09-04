import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  sector: string;
  investmentYear: number;
  imageUrl: string;
  website: string;
}

@Component({
  selector: 'app-portfolio-item-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class PortfolioItemCardComponent {
  @Input() item!: PortfolioItem;
}
