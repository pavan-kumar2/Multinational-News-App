
import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/shared/news-articles.model';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  newsArticles: NewsArticle[] = [];

  isError: boolean = false;
  isLoading: boolean = false;

  emptyStateImage = 'assets/images/no-image-found.png';

  private _selectedCountry!: string;

  @Input() set selectedCountry(country) {

    if (country) {
      this._selectedCountry = country;

      this.newsApiService
        .getNewsRequest(this.selectedCountry)
        .subscribe(value => this.newsArticles = value);
      this.newsApiService.isError$.subscribe(value => this.isError = value);
      this.newsApiService.isLoading$.subscribe(value => this.isLoading = value)
    }

  }

  get selectedCountry() {
    return this._selectedCountry;
  }




  constructor(
    private newsApiService: NewsApiService
  ) { }

  ngOnInit() {


  }



  imageErrorHandling(event: Event) {
    let imageElement = event.target as HTMLImageElement;
    imageElement.src = this.emptyStateImage;
  }

  // create dummy array for loading shimmer
  createArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i)
  }
}
