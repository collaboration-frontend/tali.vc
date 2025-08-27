import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rewaa',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'rewaa.component.html',
  styleUrls: ['rewaa.component.scss']
})
export class RewaaComponent implements OnInit {
  headerImageSrc: string = 'assets/images/rewaa.jpg';
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


