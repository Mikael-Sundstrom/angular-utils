import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ResizeObserverModule } from '@mikael-sundstrom/resize-observer'
import { AppRoutingModule } from './app.routing'

/* Components */
import { AppComponent } from './app.component'
import { ResizeObserverComponent } from './components/resize-observer.component'
import { Error404Component } from './components/error404.component'

@NgModule({
	declarations: [
		AppComponent,
		ResizeObserverComponent,
		Error404Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ResizeObserverModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
