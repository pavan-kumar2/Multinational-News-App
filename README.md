# Multinational News App

Multinational News App
The Multinational News App is an Angular-based application that aggregates and displays news from various countries and sources. It leverages modern Angular components, services, and RxJS for state management to provide users with an up-to-date and intuitive news browsing experience.

## Features

- Browse news articles from multiple countries.
- Filter news by categories and sources.
- Real-time updates with RxJS for state management.
- Mobile-responsive UI built using Angular components.
- Standalone component architecture for better modularity.

## Technologies

- Angular (Standalone components)
- RxJS for state management
- TypeScript
- Sass for styling with @mixin and variables
- HTML5, CSS3 & SCSS
- Node.js & npm

## Styling and UI

The UI is styled using **Sass (SCSS)**, which allows for a more modular and maintainable codebase:

- **Variables**: Variables are used to store theme-related values like colors, font sizes, and margins. This makes it easy to maintain a consistent design and adjust styles centrally.

  ```scss
  $color-1: #b1cee3;
  background-color: $color-1;
  ```

- **Mixins**: Reusable styles are created using Sass mixins to avoid code duplication. These mixins are defined for common patterns like flex layouts, buttons, and responsive breakpoints.

  ```scss
  @mixin flex-box($direction: null, $align: null, $justify: null, $wrap: null, $gap: null) {
    display: flex;
    flex-direction: $direction;
    align-items: $align;
    justify-content: $justify;
    flex-wrap: $wrap;
    gap: $gap;
  }

  @include flex-box($direction: column, $justify: space-between, $gap: 20px);
  ```

## Reactive State Management and Error Handling Using RxJS

1. **Reactive State Management with BehaviorSubjects**

   - `isErrorSubject` and `isLoadingSubject` are `BehaviorSubjects` in `NewsApiService` used to manage and emit changes in loading and error states.
   - These subjects help provide real-time feedback across the application by emitting new values whenever the loading or error status changes.

2. **Observables for State Tracking**

   - `isError$` and `isLoading$` are observables created from the subjects, ensuring consistent state updates across components.
   - Components like `CardsComponent` can subscribe to these observables to track loading and error states without directly manipulating the `BehaviorSubjects`.

3. **Data Transformation with RxJS Operators**

   - **`map`**: This operator transforms incoming news article data, adding a fallback image for missing URLs and formatting the publish date using `getFormattedDate()`.
   - **`tap`**: Used for side effects, such as updating loading and error statuses after data processing but before passing the data to subscribers.

4. **Error Handling with `catchError`**

   - Errors encountered during HTTP requests are managed by `catchError`, logging the error, updating the error state, and returning an empty array to avoid application crashes.

5. **Subscription Management with `takeUntil`**
   - In `CardsComponent`, `takeUntil` ensures that subscriptions are automatically unsubscribed when the component is destroyed. This is achieved through a `Subject` (`destroy$`), which signals to complete all observable streams on component teardown, preventing memory leaks.

## Code Highlights

```typescript
// newsAPi service
export class NewsApiService {
  private isErrorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isError$: Observable<boolean> = this.isErrorSubject.asObservable();
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getFormattedDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
    const formattedTime = currentDate.toLocaleTimeString("en-US", { hour12: true });
    return `${formattedDate} <span>${formattedTime}</span>`;
  }

  getNewsRequest(country: string) {
    this.isLoadingSubject.next(true);
    return this.http.get<{ articles: NewsArticle[] }>(`https://example.com/news-${country}.json`).pipe(
      map((response) =>
        response.articles.map((article) => ({
          ...article,
          urlToImage: article.urlToImage || "assets/images/no-image-found.png",
          publishedAt: this.getFormattedDate(),
        }))
      ),
      tap(() => {
        this.isLoadingSubject.next(false);
        this.isErrorSubject.next(false);
      }),
      catchError((error) => {
        console.error("Error fetching news:", error);
        this.isLoadingSubject.next(false);
        this.isErrorSubject.next(true);
        return of([]);
      })
    );
  }
}

// card component
export class CardsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.newsApiService.isLoading$.pipe(takeUntil(this.destroy$)).subscribe((value) => (this.isLoading = value));
    this.newsApiService.isError$.pipe(takeUntil(this.destroy$)).subscribe((value) => (this.isError = value));
  }

  fetchNewsArticles(country: string) {
    this.newsApiService
      .getNewsRequest(country)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => (this.newsArticles = value));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```
