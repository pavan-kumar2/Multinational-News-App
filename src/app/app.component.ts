
import { Component } from '@angular/core';
import { SELECTED_COUNTRY } from './shared/country.constants';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Multinational-News-App';

  selectedCountry: string = SELECTED_COUNTRY;

  constructor() { }

}
