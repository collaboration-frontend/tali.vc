import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-rewaa',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: 'rewaa.component.html',
  styleUrls: ['rewaa.component.scss']
})
export class RewaaComponent {
  headerImageSrc: string = 'assets/images/rewaa.jpg';
}


