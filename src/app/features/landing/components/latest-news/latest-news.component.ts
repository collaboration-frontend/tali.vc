import { Component, inject, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgClass, NgOptimizedImage } from '@angular/common';
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
    NgOptimizedImage,
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

  mainNewsItem: NewsItem | null = null;

  ngOnInit(): void {
    this.isRtl = (this.translate.currentLang || localStorage.getItem('lang') || 'en') === 'ar';
    this.translate.onLangChange.subscribe((e) => {
      this.isRtl = e.lang === 'ar';
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
