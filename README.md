# WarehousesClient

To run the client with dev server: 

```
npm init
ng serve --open
```

>Web API should be stated on address - `http://localhost:42830/api/`

**What can be improved**: 
1. Add state management using redux pattern. 
2. Break up the Catalog component into more smaller components: WarehouseDetails, ProductDetails, CategoryDetails, CategoryComponent, etc.
3. Add linting witn ESLint.
4. Implement menu of warehouses that we can select.
5. Add validation service to validate forms data.
6. Move API URL variable to Config file.
7. Add more tests.

---
Standard documentation
---


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
