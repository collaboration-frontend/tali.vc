import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tali-ventures',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: 'tali-ventures.component.html',
  styleUrls: ['tali-ventures.component.scss']
})
export class TaliVenturesComponent {
  headerImageSrc: string = 'assets/images/tali.png';
}


