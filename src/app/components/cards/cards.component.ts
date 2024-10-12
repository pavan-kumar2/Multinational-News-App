
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/shared/news-articles.model';
import { NewsApiService } from 'src/app/services/news-api.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {

  newsArticles: NewsArticle[] = [];
  isError: boolean = false;
  isLoading: boolean = true;

  emptyStateImage = 'assets/images/no-image-found.png';

  private _selectedCountry!: string;

  private destroy$ = new Subject<void>();

  @Input() set selectedCountry(country: string) {
    this.isLoading = true;
    if (country) {
      this._selectedCountry = country;
      this.fetchNewsArticles(this._selectedCountry);
    }

  }

  get selectedCountry() {
    return this._selectedCountry;
  }


  constructor(
    private newsApiService: NewsApiService
  ) { }

  ngOnInit() {
    // Subscribe to the loading and error observables once when the component is initialized
    this.newsApiService.isLoading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => (this.isLoading = value));

    this.newsApiService.isError$
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => (this.isError = value));
  }

  fetchNewsArticles(country: string) {
    this.newsApiService
      .getNewsRequest(country)
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => this.newsArticles = value);
  }

  imageErrorHandling(event: Event) {
    let imageElement = event.target as HTMLImageElement;
    imageElement.src = this.emptyStateImage;
  }

  // create dummy array for loading shimmer
  createArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i)
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
