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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
