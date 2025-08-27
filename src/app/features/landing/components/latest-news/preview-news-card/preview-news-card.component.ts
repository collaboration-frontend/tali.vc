import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-news-card',
  standalone: true,
  imports: [

  ],
  templateUrl: './preview-news-card.component.html',
  styleUrls: ['./preview-news-card.component.scss']
})
export class PreviewNewsCardComponent {
  @Input() news!: any;
}
