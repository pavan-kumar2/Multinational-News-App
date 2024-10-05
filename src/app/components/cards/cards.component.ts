import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


export interface NewsArticle {
  source: Source,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface Source {
  id: string,
  name: string
}


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  newsArticles: NewsArticle[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{ articles: NewsArticle[] }>('https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-canada.json')
      .subscribe(data => {
        console.log(data.articles);
        this.newsArticles = data.articles;
      })
  }
}
