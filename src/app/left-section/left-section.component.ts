import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
  @Output() passedEventIndia = new EventEmitter();
  @Output() passedEventUSA = new EventEmitter();
  @Output() passedEventUK = new EventEmitter();
  @Output() passedEventGermany = new EventEmitter();
  @Output() passedEventCanada = new EventEmitter();
  @Output() passedEventAustralia = new EventEmitter();
  @Output() passedEventSaudiArabia = new EventEmitter();
  @Output() passedEventFrance = new EventEmitter();
  @Output() passedEventItaly = new EventEmitter();
  @Output() passedEventSingapore = new EventEmitter();
  @Output() passedEventNewZealand = new EventEmitter();

  @Input() indiaClass = '';
  @Input() usaClass = '';
  @Input() ukClass = '';
  @Input() germanyClass = '';
  @Input() canadaClass = '';
  @Input() australiaClass = '';
  @Input() saudiArabiaClass = '';
  @Input() franceClass = '';
  @Input() italyClass = '';
  @Input() singaporeClass = '';
  @Input() newZealandClass = '';

  constructor() { }

  ngOnInit(): void {
  }

  passEventIndia() {
    this.passedEventIndia.emit();
  }

  passEventUSA() {
    this.passedEventUSA.emit();
  }

  passEventUK() {
    this.passedEventUK.emit();
  }

  passEventGermany() {
    this.passedEventGermany.emit();
  }

  passEventCanada() {
    this.passedEventCanada.emit();
  }

  passEventAustralia() {
    this.passedEventAustralia.emit();
  }

  passEventSaudiArabia() {
    this.passedEventSaudiArabia.emit();
  }

  passEventFrance() {
    this.passedEventFrance.emit();
  }

  passEventItaly() {
    this.passedEventItaly.emit();
  }

  passEventSingapore() {
    this.passedEventSingapore.emit();
  }

  passEventNewZealand() {
    this.passedEventNewZealand.emit();
  }


}
