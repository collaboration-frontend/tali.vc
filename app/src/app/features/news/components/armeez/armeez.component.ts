import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-armeez',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './armeez.component.html',
  styleUrls: ['./armeez.component.scss']
})
export class ArmeezComponent {
  headerImageSrc: string = 'assets/images/Tarmeez.png';
}


