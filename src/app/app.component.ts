import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Multinational-News-App';

  newsArticles: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any>('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-australia.json')
      .subscribe(val => {
        console.log(val.articles);
        this.newsArticles = val.articles;
      })
  }

}
