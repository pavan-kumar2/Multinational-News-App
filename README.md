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
