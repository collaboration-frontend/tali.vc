import { Component, OnInit } from '@angular/core';
import { NewsCardComponent } from './news-card/news-card.component';
import { PreviewNewsCardComponent } from './preview-news-card/preview-news-card.component';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [
    NewsCardComponent,
    PreviewNewsCardComponent,
    NgFor,
    RouterLink,
    TranslateModule
],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  newsArticles: any[] = [
    {
      id: 1,
      title: 'latestNews.items.tarmeez.title',
      description: 'latestNews.items.tarmeez.description',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/Tarmeez.png'
    },
    {
      id: 2,
      title: 'latestNews.items.graphiant.title',
      description: 'latestNews.items.graphiant.description',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/Graphiant.png'
    },
    {
      id: 3,
      title: 'latestNews.items.northladder.title',
      description: 'latestNews.items.northladder.description',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/northladder.jpeg'
    },
    {
      id: 4,
      title: 'latestNews.items.taliPr.title',
      description: 'latestNews.items.taliPr.description',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/tali.png'
    },
    {
      id: 5,
      title: 'latestNews.items.nearpay.title',
      description: 'latestNews.items.nearpay.description',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/nearpay.jpeg'
    },
    {
      id: 6,
      title: 'latestNews.items.rewaa.title',
      description: 'latestNews.items.rewaa.description',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/rewaa.jpg'
    },
  ];

  mainNewsItem: any;

  ngOnInit(): void {
    this.onNewsClick(this.newsArticles[0], 0);
  }

  onNewsClick(news: any, index: number) {
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
