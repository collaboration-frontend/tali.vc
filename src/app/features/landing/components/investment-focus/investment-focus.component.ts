import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InvestmentFocusItemCardComponent } from './item-card/item-card.component';
import { InvestmentFocusPreviewItemCardComponent } from './preview-item-card/preview-item-card.component';

interface FocusArea {
  icon: string;
  alt: string;
  labelKey: string;
  imageUrl: string;
}

@Component({
  selector: 'app-investment-focus',
  standalone: true,
  imports: [CommonModule, InvestmentFocusItemCardComponent, InvestmentFocusPreviewItemCardComponent, TranslateModule],
  templateUrl: './investment-focus.component.html',
  styleUrls: ['./investment-focus.component.scss']
})
export class InvestmentFocusComponent {
  focusAreas: FocusArea[] = [
    { icon: 'assets/icons/FinTech-icon.svg', alt: 'FinTech', labelKey: 'investmentFocus.areas.fintech', imageUrl: 'assets/images/investments_focus/fintech.png' },
    { icon: 'assets/icons/Setting.svg', alt: 'IT Services', labelKey: 'investmentFocus.areas.itServices' , imageUrl: 'assets/images/investments_focus/it_services.png'},
    { icon: 'assets/icons/Games.svg', alt: 'Gaming', labelKey: 'investmentFocus.areas.gaming' , imageUrl: 'assets/images/investments_focus/gaming.png'},
    { icon: 'assets/icons/Data Analytics.svg', alt: 'Data Analytics', labelKey: 'investmentFocus.areas.dataAnalytics' , imageUrl: 'assets/images/investments_focus/data_analytics.png'},
    { icon: 'assets/icons/Cloud.svg', alt: 'Cloud', labelKey: 'investmentFocus.areas.cloud' , imageUrl: 'assets/images/investments_focus/cloud.png'},
    { icon: 'assets/icons/AI.svg', alt: 'AI', labelKey: 'investmentFocus.areas.ai' , imageUrl: 'assets/images/investments_focus/ai.png'},
    { icon: 'assets/icons/Cyber Security.svg', alt: 'Cyber Security', labelKey: 'investmentFocus.areas.cyberSecurity' , imageUrl: 'assets/images/investments_focus/cyber_security.png'},
    { icon: 'assets/icons/Media.svg', alt: 'Media', labelKey: 'investmentFocus.areas.media' , imageUrl: 'assets/images/investments_focus/media.png'},
    { icon: 'assets/icons/Prop Tech.svg', alt: 'Prop Tech', labelKey: 'investmentFocus.areas.propTech' , imageUrl: 'assets/images/investments_focus/prop_tech.png'},
    { icon: 'assets/icons/IoT.svg', alt: 'IoT', labelKey: 'investmentFocus.areas.iot' , imageUrl: 'assets/images/investments_focus/iot.png'},
    { icon: 'assets/icons/BlockChain.svg', alt: 'Blockchain', labelKey: 'investmentFocus.areas.blockchain' , imageUrl: 'assets/images/investments_focus/blockchain.png'}
  ];
  selectedArea: FocusArea | null = this.focusAreas.length > 0 ? this.focusAreas[0] : null;

  selectArea(area: FocusArea): void {
    this.selectedArea = area;
  }
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
