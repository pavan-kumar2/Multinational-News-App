import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsArticle } from '../shared/news-articles.model';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private isErrorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isError$: Observable<boolean> = this.isErrorSubject.asObservable();
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  formateDate: any;

  constructor(private http: HttpClient) { }

  private getFormat1tedDate() {
    const currentDate = new Date();
    const formateDate = currentDate.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })

    this.formateDate = formateDate;

    const formateTime = currentDate.toLocaleTimeString('en-US', { hour12: true })

    return `${formateDate}   <span>${formateTime}</span>`;

  }

  getNewsRequest(country: string) {
    this.isLoadingSubject.next(true);
    return this.http.get<{ articles: NewsArticle[] }>(`https://gist.githubusercontent.com/pavan-kumar2/8fb68c793eda5c22a75492593a4572d5/raw/80516d649f9b308bad93dc265827ff0d7479cce8/multinational-news-${country}.json`)
      .pipe(
        map(response => {
          return response.articles.map(article => {
            return {
              ...article,
              urlToImage: article.urlToImage || 'assets/images/no-image-found.png',
              publishedAt: this.getFormat1tedDate()
            }
          })
        }),
        tap(() => {
          this.isLoadingSubject.next(false)
          this.isErrorSubject.next(false)
        }),
        catchError(error => {
          console.error('Error fetching news:', error);
          this.isLoadingSubject.next(false);
          this.isErrorSubject.next(true);
          return of([])
        }),
      );
  }
}
