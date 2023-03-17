import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AngularPrismComponent } from './components/angular-prism.component'
import { Error404Component } from './components/error404.component'
import { ResizeObserverComponent } from './components/resize-observer.component'

const Error404 = {
	path: '**',
	children: [],
	component: Error404Component,
	data: { title: 'Error 404' }
}

const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},
	{
		path: 'resize-observer',
		children: [Error404],
		component: ResizeObserverComponent,
		data: { title: 'Resize Observer' }
	},
	{
		path: 'angular-prism',
		children: [Error404],
		component: AngularPrismComponent,
		data: { title: 'Angular Prism' }
	},
	Error404
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }