# Angular Resize Observer
[![GitHub]][MIT]
![Downloads]
![Vulnerabilities]
[![AngularTypescript]](https://www.github.com/angular/angular)
![NpmPeerDependencyVersion]

<br>

## Install the library

```bash
npm install --save @mikael-sundstrom/resize-observer
```

## app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'

// Import the library module
import { ResizeObserverModule } from '@mikael-sundstrom/resize-observer'

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,

		// Specify ResizeObserverModule library as an import
		ResizeObserverModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
```

## app.component.ts
```typescript
import { Component } from '@angular/core';

// Import the resized event model
import { ResizedObserver } from '@mikael-sundstrom/resize-observer';

@Component({...})

class MyComponent {
	width!: number;
	height!: number;

	onResized(event: ResizedEvent) {
		this.width = event.newRect.width;
		this.height = event.newRect.height;
	}
}
```

## app.component.html
```html
<div (resized)="onResized($event)"></div>
```
<br>
  
## Browser Compatibility

It uses the built-in [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) from the browser.

![browser-compatibility-resize-observer.png](https://raw.githubusercontent.com/Mikael-Sundstrom/angular-utils/master/src/assets/images/browser-compatibility-resize-observer.png)
<br>

This package is based on https://www.npmjs.com/package/angular-resize-event v3.2.0

<!-- Links -->
[GitHub]: https://img.shields.io/github/license/Mikael-Sundstrom/angular-utils
[MIT]: https://github.com/Mikael-Sundstrom/angular-utils/blob/master/LICENSE.md
[Vulnerabilities]: https://img.shields.io/snyk/vulnerabilities/github/Mikael-Sundstrom/angular-utils
[NpmPeerDependencyVersion]: https://img.shields.io/npm/dependency-version/@mikael-sundstrom/resize-observer/peer/@angular/core
[AngularTypescript]: https://img.shields.io/badge/angular-typescript-blue?logo=angular
[Downloads]: https://img.shields.io/npm/dt/@mikael-sundstrom/resize-observer