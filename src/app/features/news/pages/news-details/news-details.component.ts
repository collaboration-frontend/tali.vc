import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GraphiantComponent } from '../../components/graphiant/graphiant.component';
import { ArmeezComponent } from '../../components/armeez/armeez.component';
import { NearpayComponent } from '../../components/nearpay/nearpay.component';
import { TaliVenturesComponent } from '../../components/tali-ventures/tali-ventures.component';
import { RewaaComponent } from '../../components/rewaa/rewaa.component';
import { NorthladderComponent } from '../../components/northladder/northladder.component';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [
    CommonModule,
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
export default class NewsDetailsComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  newsId: string | null = null;

  constructor() {
    this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}



