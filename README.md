# MultinationalNewsApp

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
- HTML5 & CSS3
- Node.js & npm

## Styling and UI

The UI is styled using **Sass (SCSS)**, which allows for a more modular and maintainable codebase:

- **Variables**: Variables are used to store theme-related values like colors, font sizes, and margins. This makes it easy to maintain a consistent design and adjust styles centrally.

  ```scss
  // Example: src/styles/_variables.scss
  $primary-color: #3498db;
  $secondary-color: #2ecc71;
  $font-size-base: 16px;
  ```

- **Mixins**: Reusable styles are created using Sass mixins to avoid code duplication. These mixins are defined for common patterns like flex layouts, buttons, and responsive breakpoints.

  ```scss
  // Example: src/styles/_mixins.scss
  @mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @mixin responsive($breakpoint) {
    @media (max-width: $breakpoint) {
      @content;
    }
  }
  ```

- **Global Styles**: Global styles are defined in `styles.scss` to ensure a cohesive design throughout the app. This includes resetting styles, defining typography, and importing `@mixin` and variables for consistent usage.

## RxJS for State Management

The **Multinational News App** leverages **RxJS** (Reactive Extensions for JavaScript) for effective state management:

- **Observables**: Utilized to manage asynchronous operations, such as fetching data from APIs and handling user interactions. The app's components subscribe to these Observables for real-time updates.

- **Subjects & BehaviorSubjects**: Subjects manage the flow of data, while BehaviorSubjects are used for storing the latest news state, ensuring that all components receive up-to-date information.

- **Operators**: RxJS operators like `map`, `filter`, `switchMap`, and `mergeMap` streamline data transformation. These operators handle filtering categories, switching sources, and managing asynchronous tasks.

- **State Management**: Services integrate RxJS to maintain the application's state. Components subscribe to these services to access and react to changing data, enabling a dynamic and responsive user interface.

# Reactive State Management and Error Handling in Angular Using RxJS: An Efficient News API Integration

This project demonstrates an efficient integration of a News API service using Angular and RxJS to manage loading and error states, handle data transformation, and prevent memory leaks with structured subscription management.

## Key Features

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

### NewsApiService (Service Layer)

```typescript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewsArticle } from "../shared/news-articles.model";
import { BehaviorSubject, catchError, map, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
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
```
