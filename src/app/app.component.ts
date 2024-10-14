
import { Component, HostListener } from '@angular/core';
import { SELECTED_COUNTRY } from './shared/country.constants';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Multinational-News-App';

  selectedCountry: string = SELECTED_COUNTRY;

  isScrollTopButton: boolean = false;

  constructor() { }

  @HostListener('window:scroll', []) onWindowScroll() {

    if (window.scrollY > 200) {
      this.isScrollTopButton = true;
    } else {
      this.isScrollTopButton = false;
    }

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
