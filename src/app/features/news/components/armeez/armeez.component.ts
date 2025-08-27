import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-armeez',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './armeez.component.html',
  styleUrls: ['./armeez.component.scss']
})
export class ArmeezComponent implements OnInit {
  headerImageSrc: string = 'assets/images/Tarmeez.png';
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


