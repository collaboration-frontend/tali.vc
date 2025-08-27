import { Component } from '@angular/core';
import { InvestmentFocusItemCardComponent } from './item-card/item-card.component';
import { InvestmentFocusPreviewItemCardComponent } from './preview-item-card/preview-item-card.component';

@Component({
  selector: 'app-investment-focus',
  standalone: true,
  imports: [InvestmentFocusItemCardComponent, InvestmentFocusPreviewItemCardComponent],
  templateUrl: './investment-focus.component.html',
  styleUrls: ['./investment-focus.component.scss']
})
export class InvestmentFocusComponent {
  investmentAreas = [
    {
      title: 'Technology',
      description: 'Innovative tech startups and established companies driving digital transformation.',
      preview: 'Cutting-edge technology investments',
      imageUrl: ''
    },
    {
      title: 'Healthcare',
      description: 'Healthcare companies focused on improving patient outcomes and medical innovation.',
      preview: 'Healthcare and biotechnology',
      imageUrl: ''
    },
    {
      title: 'Renewable Energy',
      description: 'Sustainable energy solutions and green technology investments.',
      preview: 'Clean energy and sustainability',
      imageUrl: ''
    }
  ];
}
