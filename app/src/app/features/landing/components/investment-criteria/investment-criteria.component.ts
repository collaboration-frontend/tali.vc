import { Component } from '@angular/core';
import { InvestmentCriteriaItemCardComponent } from './item-card/item-card.component';

@Component({
  selector: 'app-investment-criteria',
  standalone: true,
  imports: [InvestmentCriteriaItemCardComponent],
  templateUrl: './investment-criteria.component.html',
  styleUrls: ['./investment-criteria.component.scss']
})
export class InvestmentCriteriaComponent {
  criteriaItems = [
    {
      title: 'Market Size',
      description: 'We target companies operating in large, addressable markets with significant growth potential.',
      icon: '📊'
    },
    {
      title: 'Strong Management',
      description: 'Experienced leadership team with proven track record and clear vision for growth.',
      icon: '👥'
    },
    {
      title: 'Competitive Advantage',
      description: 'Sustainable competitive moats through technology, network effects, or unique positioning.',
      icon: '🛡️'
    },
    {
      title: 'Scalable Business Model',
      description: 'Business models that can scale efficiently with increasing revenue and market share.',
      icon: '📈'
    },
    {
      title: 'Financial Performance',
      description: 'Strong unit economics, positive cash flow, and clear path to profitability.',
      icon: '💰'
    },
    {
      title: 'Innovation Focus',
      description: 'Companies driving innovation in their respective industries with cutting-edge solutions.',
      icon: '💡'
    }
  ];
}
