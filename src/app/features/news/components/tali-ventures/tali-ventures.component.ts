import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tali-ventures',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'tali-ventures.component.html',
  styleUrls: ['tali-ventures.component.scss']
})
export class TaliVenturesComponent implements OnInit {
  headerImageSrc: string = 'assets/images/tali.png';
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


