import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-graphiant',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: 'graphiant.component.html',
  styleUrls: ['graphiant.component.scss']
})
export class GraphiantComponent {
  headerImageSrc: string = 'assets/images/Graphiant.png';
}


