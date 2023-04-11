import { Component } from '@angular/core';
import { ExtendedTranslateService } from 'src/app/service/extranslate.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public translate: ExtendedTranslateService) {}
}
