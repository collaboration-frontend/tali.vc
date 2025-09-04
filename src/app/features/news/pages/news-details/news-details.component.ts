import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GraphiantComponent } from '../../components/graphiant/graphiant.component';
import { ArmeezComponent } from '../../components/armeez/armeez.component';
import { NearpayComponent } from '../../components/nearpay/nearpay.component';
import { TaliVenturesComponent } from '../../components/tali-ventures/tali-ventures.component';
import { RewaaComponent } from '../../components/rewaa/rewaa.component';
import { NorthladderComponent } from '../../components/northladder/northladder.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NEWS_LIST } from '@news/constant/news.constant';
import type { NewsItem } from '@news/model/news.model';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    GraphiantComponent,
    ArmeezComponent,
    NorthladderComponent,
    TaliVenturesComponent,
    NearpayComponent,
    RewaaComponent
  ],
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export default class NewsDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly translate = inject(TranslateService);

  newsId: string | null = null;
  otherNews: NewsItem[] = [];
  currentNews: NewsItem | undefined;
  isRtl = false;
  dateLocale: string = 'en';

  constructor() {
  }
  
  ngOnInit(): void {
    const currentLanguage = this.translate.currentLang || localStorage.getItem('lang') || 'en';
    this.isRtl = currentLanguage === 'ar';
    this.dateLocale = currentLanguage;
    this.translate.onLangChange.subscribe((e) => {
      this.isRtl = e.lang === 'ar';
      this.dateLocale = e.lang;
    });
    this.activatedRoute.paramMap.subscribe((params) => {
      this.newsId = params.get('id');
      const currentIdAsNumber = Number(this.newsId);
      this.currentNews = NEWS_LIST.find((item) => item.id === currentIdAsNumber);
      this.otherNews = NEWS_LIST
        .filter((item) => item.id !== currentIdAsNumber)

      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {}
    });
  }
}



