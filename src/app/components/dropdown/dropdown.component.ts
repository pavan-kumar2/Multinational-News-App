import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { NgSelectComponent, NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
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

  @ViewChild('countrySelect') countrySelect!: NgSelectComponent;

  constructor() {
  }

  ngOnInit() {
    this.selectCountry(this.selectedCountry);
  }

  selectCountry(countryName: string) {
    this.selectedCountry$.emit(countryName);
    this.countrySelect.blur();
  }

}
