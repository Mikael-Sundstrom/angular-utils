import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Output } from '@angular/core'

@Directive({
	selector: '[resized]'
})
export class ResizeDirective implements OnInit, OnDestroy {
	private observer: ResizeObserver
	private oldRect?: DOMRectReadOnly

	@Output() public readonly resized

	public constructor(
		private readonly element: ElementRef,
		private readonly zone: NgZone
	) {
		this.resized = new EventEmitter<ResizeEvent>()
		this.observer = new ResizeObserver(entries => this.zone.run(() => this.observe(entries)))
	}

	public ngOnInit(): void {
		this.observer.observe(this.element.nativeElement)
	}

	public ngOnDestroy(): void {
		this.observer.disconnect()
	}

	private observe(entries: ResizeObserverEntry[]): void {
		const domSize = entries[0]
		const resizedEvent = new ResizeEvent(domSize.contentRect, this.oldRect)
		this.oldRect = domSize.contentRect
		this.resized.emit(resizedEvent)
	}
}

export class ResizeEvent {
	public newRect: DOMRectReadOnly
	public oldRect?: DOMRectReadOnly
	public isFirst: boolean

	public constructor(newRect: DOMRectReadOnly, oldRect: DOMRectReadOnly | undefined) {
		this.newRect = newRect
		this.oldRect = oldRect
		this.isFirst = oldRect == null
	}
}