import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsArticle } from '../shared/news-articles.model';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private isErrorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  isError$: Observable<boolean> = this.isErrorSubject.asObservable();
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  // Create a new Date object
  currentDate = new Date();

  formateDate = this.currentDate.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  formateTime = this.currentDate.toLocaleTimeString('en-US', { hour12: true })

  updatedDate = `${this.formateDate}   <span>${this.formateTime}</span>`

  constructor(private http: HttpClient) {

  }

  getNewsRequest(country: string) {
    return this.http.get<{ articles: NewsArticle[] }>(`https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-${country}.json`)
      .pipe(
        map(val => val.articles
          .map(article => {
            return {
              ...article,
              urlToImage: article.urlToImage ? article.urlToImage : 'assets/images/no-image-found.png',
              publishedAt: this.updatedDate
            }
          })),
        tap(() => {
          this.isLoadingSubject.next(false)
          this.isErrorSubject.next(false)
        }),
        catchError(error => {
          this.isLoadingSubject.next(false);
          this.isErrorSubject.next(true);
          return of([])
        }),

      )
  }
}
