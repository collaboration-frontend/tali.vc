import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-northladder',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: 'northladder.component.html',
  styleUrls: ['northladder.component.scss']
})
export class NorthladderComponent {
  headerImageSrc: string = 'assets/images/northladder.jpeg';
}


