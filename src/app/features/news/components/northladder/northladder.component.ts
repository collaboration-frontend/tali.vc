import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-northladder',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'northladder.component.html',
  styleUrls: ['northladder.component.scss']
})
export class NorthladderComponent implements OnInit {
  headerImageSrc: string = 'assets/images/northladder.jpeg';
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


