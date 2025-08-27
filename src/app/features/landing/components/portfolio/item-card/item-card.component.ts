import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface PortfolioItem {
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
    TranslateModule
  ],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class PortfolioItemCardComponent {
  @Input() item!: PortfolioItem;
}
