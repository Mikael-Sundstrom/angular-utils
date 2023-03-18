import { AfterViewChecked, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ResizeEvent } from '@mikael-sundstrom/resize-observer'
import { PrismService } from 'src/app/services/prism.service'

@Component({
	selector: 'app-resize-event',
	template: `
	<div class="row section">
		<div class="col s12">
			<div class="description section">
				<h3>Demo</h3>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas officia non laboriosam id libero labore quos facere. Ipsum optio quae, neque facere distinctio quasi enim saepe quaerat tempora sed.</p>
			</div>
		</div>
		<div class="col s12 m12 l6">
			<div class="resize-observer-section">
				<div id="resize-observer" class="unset" (resized)="onResized($event)">
					Resize Observer<br>
					any:any
				</div>
			</div>
			<br>
			<ul class="collection">
				<li class="collection-item">Height: <span class="resize-observer-h">{{height}}</span> px</li>
				<li class="collection-item">Width: <span class="resize-observer-w">{{width}}</span> px</li>
			</ul>
		</div>
		<div class="col s12 m12 l6">
			<div class="resize-observer-section">
				<div id="resize-observer" class="square" #square (resized)="onResizedSquare($event)">
					Resize Observer<br>1:1
				</div>
			</div>
			<br>
			<ul class="collection">
				<li class="collection-item">Height: <span class="resize-observer-h">{{heightSquare}}</span> px</li>
				<li class="collection-item">Width: <span class="resize-observer-w">{{widthSquare}}</span> px</li>
			</ul>
		</div>
	</div>
	<div class="row section">
		<div class="col s12">
			<p class="flow-text"><img src="./assets/svg-language/npm.svg" alt="svg"> Install package from npm</p>
			<div [innerHTML]="npm"></div>
			<br>
			<p class="flow-text"><img src="./assets/svg-language/angular.svg" alt="svg"> app.module.ts</p>
			<div [innerHTML]="appModuleTs"></div>
			<br>
			<p class="flow-text"><img src="./assets/svg-language/angular-component.svg" alt="svg"> app.component.ts</p>
			<div [innerHTML]="appComponentTs"></div>
			<br>
			<p class="flow-text"><img src="./assets/svg-language/html.svg" alt="svg"> app.component.html</p>
			<div [innerHTML]="appComponentHtml"></div>
		</div>
	</div>
	`,
	styles: [`
		.collection-item{
			color:#1976D2 !important;
		}
		.resize-observer-h,.resize-observer-w{
			color:#d32f2f;
		}
		.resize-observer-section {
			min-height: 300px;

			#resize-observer {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				overflow: auto;
				background: #eee;
				color: #777;
				font-weight: bold;
				border: dashed #777;

				&.unset {
					resize: both;
					height: 250px;
					min-height: 64px;
					min-width: 128px;
					max-height: 300px;
					max-width: 280px;
					width: 254px;


					&::before {
						font-family: 'Material Symbols Rounded';
						content: 'resize';
						position: absolute;
						height: 26px;
						right: 0px;
						color: #777;
						font-size: 21px;
						overflow: hidden;
						bottom: 0px;
						float: right;
						z-index:99;
					}
				}

				&.square {
					max-height: 300px;
				}
			}
		}
	`]
})

export class ResizeObserverComponent implements AfterViewChecked {
	// Code Block Properties
	private prism: boolean = false
	public npm: string
	public appModuleTs: string
	public appComponentTs: string
	public appComponentHtml: string

	// Resize Observer Properties
	public width: number = 0
	public height: number = 0
	@ViewChild('square') square: any
	public widthSquare: number = 0
	public heightSquare: number = 0

	constructor(private prismService: PrismService) {
		this.npm = this.prismService.createCodeBlock('bash', roNpm)
		this.appModuleTs = this.prismService.createCodeBlock('typescript', roAppModuleTs)
		this.appComponentTs = this.prismService.createCodeBlock('typescript', roAppComponentTs)
		this.appComponentHtml = this.prismService.createCodeBlock('html', roAppComponentHtml)
	}

	ngAfterViewChecked(): void {
		if (!this.prism) {
			this.prismService.highlightAll()
			this.prism = true
		}
	}

	public onResized(event: ResizeEvent) {
		this.width = event.newRect.width
		this.height = event.newRect.height
		this.square.nativeElement.style.width = event.newRect.width + 'px'
		this.square.nativeElement.style.height = event.newRect.width + 'px'

	}

	public onResizedSquare(event: ResizeEvent) {
		this.widthSquare = event.newRect.width
		this.heightSquare = event.newRect.height
	}
}

/*
 * Code Snippets
 */
const roNpm = `npm install --save @mikael-sundstrom/resize-event`
const roAppComponentHtml = `&lt;div (resized)="onResized($event)">&lt;/div>`
const roAppModuleTs = `
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'

// Import the library module
import { ResizeEventModule } from '@mikael-sundstrom/resize-event'

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,

		// Specify AngularResizeEventModule library as an import
		ResizeEventModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
`
const roAppComponentTs = `
import { Component } from '@angular/core';

// Import the resized event model
import { ResizedEvent } from '@mikael-sundstrom/resize-event';

@Component({...})

class MyComponent {
	width!: number;
	height!: number;

	onResized(event: ResizedEvent) {
		this.width = event.newRect.width;
		this.height = event.newRect.height;
	}
}
`