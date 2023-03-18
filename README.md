![workflow](https://github.com/Mikael-Sundstrom/angular-utils/actions/workflows/static.yml/badge.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/Mikael-Sundstrom/angular-utils)
![Website](https://img.shields.io/website?down_message=offlline&up_message=online&url=https%3A%2F%2Fmikael-sundstrom.github.io%2Fangular-utils)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fmikael-sundstrom.github.io%2Fangular-utils)
# AngularUtils
An app I use to build npm packages for angular.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Build
## Github Pages with actions
1. `npm run build-github-pages`
2. Use VS Code source control and commit.

## Build and publish resize-observer package
Remember to add new version in */projects/resize-observer/package.json* before uploading.  
Then enter: `npm run build-resize-observer` in bash.
