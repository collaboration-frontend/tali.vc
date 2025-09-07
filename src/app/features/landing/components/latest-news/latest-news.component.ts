import { Component, inject, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DatePipe, NgFor, NgClass, isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from "@angular/router";
import { NewsItem } from '@news/model/news.model';
import { NEWS_LIST } from '@news/constant/news.constant';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    TranslateModule,
    RouterLink,
    DatePipe
],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  router = inject(Router);
  newsArticles: NewsItem[] = NEWS_LIST;
  private readonly translate = inject(TranslateService);
  isRtl = false;
  dateLocale: string = 'en';

  mainNewsItem: NewsItem | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Only access localStorage if running in browser
    let currentLanguage = 'en';
    if (isPlatformBrowser(this.platformId)) {
      currentLanguage = this.translate.currentLang || localStorage.getItem('lang') || 'en';
    } else {
      // On server, use translate service current language or default
      currentLanguage = this.translate.currentLang || 'en';
    }
    
    this.isRtl = currentLanguage === 'ar';
    this.dateLocale = currentLanguage;
    this.translate.onLangChange.subscribe((e) => {
      this.isRtl = e.lang === 'ar';
      this.dateLocale = e.lang;
    });
    this.onNewsClick(this.newsArticles[0], 0);
  }

  onOpenNewsDetails(){
    if (this.mainNewsItem) {
      this.router.navigate(['/news', this.mainNewsItem.id]);
    }
  }

  onNewsClick(news: NewsItem, index: number) {
    this.mainNewsItem = news;

    this.newsArticles = this.newsArticles.map((item) => {
      return {
        ...item,
        active: false
      }
    });
    this.newsArticles[index].active = true;
  }
}
