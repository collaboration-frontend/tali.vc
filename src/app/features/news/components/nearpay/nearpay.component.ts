import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nearpay',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './nearpay.component.html',
  styleUrls: ['./nearpay.component.scss']
})
export class NearpayComponent implements OnInit {
  headerImageSrc: string = 'assets/images/nearpay.jpeg';
  isArabic: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const initialLang = this.translate.currentLang || localStorage.getItem('lang') || 'en';
    this.isArabic = initialLang === 'ar';
    this.translate.onLangChange.subscribe(event => {
      this.isArabic = event.lang === 'ar';
    });
  }
}


