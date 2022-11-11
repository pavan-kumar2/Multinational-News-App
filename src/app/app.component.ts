import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Multinational-news-App';

  country: String = 'india';

  countrySelected: string = 'INDIA';

  indiaClass = 'active';
  usaClass = '';
  ukClass = '';
  germanyClass = '';
  canadaClass = '';
  australiaClass = '';
  saudiArabiaClass = '';
  franceClass = '';
  italyClass = '';
  singaporeClass = '';
  newZealandClass = '';


  news: any = null;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {

    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })

  }

  india() {
    this.indiaClass = 'active';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'INDIA';
    this.country = 'india';

    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  usa() {
    this.indiaClass = '';
    this.usaClass = 'active';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'USA';
    this.country = 'usa';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  uk() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = 'active';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'UNITED KINGDOM';
    this.country = 'uk';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  germany() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = 'active';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'GERMANY';
    this.country = 'germany';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  canada() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = 'active';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'CANADA';
    this.country = 'canada';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  australia() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = 'active';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'AUSTRALIA';
    this.country = 'australia';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  saudiArabia() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = 'active';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'SAUDI ARABIA'
    this.country = 'saudiArabia';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  france() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = 'active';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'FRANCE'
    this.country = 'france';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  italy() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = 'active';
    this.singaporeClass = '';
    this.newZealandClass = '';

    this.countrySelected = 'ITALY'
    this.country = 'italy';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  singapore() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = 'active';
    this.newZealandClass = '';

    this.countrySelected = 'SINGAPORE'
    this.country = 'singapore';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

  newZealand() {
    this.indiaClass = '';
    this.usaClass = '';
    this.ukClass = '';
    this.germanyClass = '';
    this.canadaClass = '';
    this.australiaClass = '';
    this.saudiArabiaClass = '';
    this.franceClass = '';
    this.italyClass = '';
    this.singaporeClass = '';
    this.newZealandClass = 'active';

    this.countrySelected = 'NEW ZEALAND'
    this.country = 'newZealand';
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-' + this.country + '.json').subscribe(res => {
      this.news = res;
      // console.log(res);
    })
  }

}
