import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivationEnd, Router } from '@angular/router'

declare const M: any

@Component({
	selector: 'app-root',
	template: `
		<header>
			<nav class="blue darken-2">
				<div class="container">
					<div class="nav-wrapper">
						<a class="title">{{ title }}</a>
						<a data-target="slide-out" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
					</div>
				</div>
			</nav>
			<ul id="slide-out" class="sidenav sidenav-fixed">
				<img [src]="angularTypescript">
				<li *ngFor="let link of navLinks">
				<a class="waves-effect" routerLink="{{link.route}}"><i class="{{link.icon_set}}">{{link.icon}}</i>{{link.title}}</a>

				</li>
			</ul>
		</header>

		<main>
			<div class="container">
				<router-outlet></router-outlet>
			</div>
		</main>

		<footer class="page-footer blue darken-2">
			<div class="container">
				<div class="row">
					<div class="col l6 s12">
						<h5 class="white-text">Footer Content</h5>
						<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
					</div>
					<!-- <div class="col l4 offset-l2 s12">
						<h5 class="white-text">Links</h5>
						<ul>
							<li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
						</ul>
					</div> -->
				</div>
			</div>
			<div class="footer-copyright">
				<div class="container">
					<span class="right">MIT License</span>
					<a class="white-text right btn red darken-2" href="https://github.com/Mikael-Sundstrom/angular-utils"><i class="fa-github left"></i>GITHUB</a>
				</div>
			</div>
		</footer>
	`,
	styles: []
})
export class AppComponent implements OnInit, OnDestroy {
	title: string = 'Angular Utils'
	angularTypescript: string = './assets/images/400x128_angular_typescript.png'

	navLinks: Array<any> = [
		{ title: 'Resize Observer', route: 'resize-observer', icon: 'resize', icon_set: 'material-symbols-rounded' },
		{ title: 'Error404', route: 'error404', icon: 'error', icon_set: 'material-symbols-rounded' },
	]

	constructor(router: Router) {
		router.events.subscribe(e => {
			if (e instanceof ActivationEnd) {
				this.title = e.snapshot.data['title']
			}
		})
	}

	ngOnInit() {
		M.AutoInit()
	}

	ngOnDestroy() {
		M.destroy()
	}
}
