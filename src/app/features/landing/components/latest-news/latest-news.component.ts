import { Component, OnInit } from '@angular/core';
import { NewsCardComponent } from './news-card/news-card.component';
import { PreviewNewsCardComponent } from './preview-news-card/preview-news-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [
    NewsCardComponent,
    PreviewNewsCardComponent,
    NgFor
  ],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  newsArticles: any[] = [
    {
      title: 'Tarmeez',
      description: 'Tali Ventures, stc group’s corporate venture capital arm, has led a strategic funding round in Tarmeez Capital, a Saudi fintech innovating in the fast-growing sukuk and debt instruments market ',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/Tarmeez.png'
    },
    {
      title: ' Graphiant.',
      description: 'Graphiant, a leading provider of AI-powered data analytics and insights, has raised a $100 million Series B funding round led by Tali Ventures, stc group’s corporate venture capital arm.',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/Graphiant.png'
    },
    {
      title: ' Northladder',
      description: 'Northladder, a leading provider of AI-powered data analytics and insights, has raised a $100 million Series B funding round led by Tali Ventures, stc group’s corporate venture capital arm.',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/northladder.jpeg'
    },
    {
      title: ' Tali PR',
      description: 'Tali PR, a leading provider of AI-powered data analytics and insights, has raised a $100 million Series B funding round led by Tali Ventures, stc group’s corporate venture capital arm.',
      date: new Date('2024-01-15'),
      category: 'Investments',
     imageUrl: '../../../../../assets/images/tali.png'
    },
    {
      title: ' NearPay',
      description: 'NearPay, a leading provider of AI-powered data analytics and insights, has raised a $100 million Series B funding round led by Tali Ventures, stc group’s corporate venture capital arm.',
      date: new Date('2024-01-15'),
      category: 'Investments',
      imageUrl: '../../../../../assets/images/nearpay.jpeg'
    },
    {
      title: ' Rewaa',
      description: 'Rewaa, a leading provider of AI-powered data analytics and insights, has raised a $100 million Series B funding round led by Tali Ventures, stc group’s corporate venture capital arm.',
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
