import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { COUNTRIES, SELECTED_COUNTRY } from 'src/app/shared/country.constants';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  selectedCountry: string = SELECTED_COUNTRY;

  @Output() selectedCountry$: EventEmitter<string> = new EventEmitter<string>();

  countries = COUNTRIES;

  constructor() {
  }

  ngOnInit() {
    this.selectCountry(this.selectedCountry);
  }

  selectCountry(countryName: string) {
    this.selectedCountry$.emit(countryName);
  }

}
