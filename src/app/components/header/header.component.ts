import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { COUNTRIES, COUNTRIES_KEY_VALUE } from 'src/app/shared/country.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  COUNTRIES = COUNTRIES;
  COUNTRIES_KEY_VALUE = COUNTRIES_KEY_VALUE;

  selectedCountryName!: string;

  @Output() selectedCountry$: EventEmitter<string> = new EventEmitter<string>();

  headerTitle!: string;

  constructor(private cdr: ChangeDetectorRef) { }

  selectedCountry(countryName: string) {
    if (countryName) {
      this.selectedCountryName = countryName;
      this.selectedCountry$.emit(countryName);

      this.headerTitle = `<div class="title-badge">
      News about <span>${COUNTRIES_KEY_VALUE[this.selectedCountryName]}</span>
    </div>`

      this.cdr.detectChanges();
    }
  }

}
