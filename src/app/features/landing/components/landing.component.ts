import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerComponent } from './banner/banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InvestmentCriteriaComponent } from './investment-criteria/investment-criteria.component';
import { InvestmentFocusComponent } from './investment-focus/investment-focus.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    BannerComponent,
    AboutUsComponent,
    InvestmentFocusComponent,
    InvestmentCriteriaComponent,
    PortfolioComponent,
    LatestNewsComponent,
    ContactUsComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export default class LandingComponent {}
