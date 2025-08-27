import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nearpay',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nearpay.component.html',
  styleUrls: ['./nearpay.component.scss']
})
export class NearpayComponent {
  headerImageSrc: string = 'assets/images/nearpay.jpeg';
}


