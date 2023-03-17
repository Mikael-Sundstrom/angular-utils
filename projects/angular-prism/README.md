# Angular Resize Event

![GitHub](https://img.shields.io/github/license/Mikael-Sundstrom/angular-resize-observer?style=flat-square)&nbsp; [![github version](https://img.shields.io/github/package-json/v/Mikael-Sundstrom/angular-resize-observer/master?label=github&style=flat-square)](https://github.com/Mikael-Sundstrom/angular-resize-observer)&nbsp; [![npm version](https://img.shields.io/npm/v/@mikael-sundstrom/angular-resize-observer?style=flat-square)](https://www.npmjs.com/package/@mikael-sundstrom/resize-event)&nbsp; [![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/Mikael-Sundstrom/angular-resize-observer?style=flat-square)](https://snyk.io/test/github/Mikael-Sundstrom/angular-resize-observer)

It uses the built-in [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) from the browser.

## Install the library

```bash
$ npm install --save @mikael-sundstrom/angular-resize-observer
```

## app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'

// Import the library module
import { ResizeObserverModule } from '@mikael-sundstrom/angular-resize-observer'

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
import { ResizedObserver } from '@mikael-sundstrom/angular-resize-observer';

@Component({...})

class MyComponent {
	width: number;
	height: number;

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