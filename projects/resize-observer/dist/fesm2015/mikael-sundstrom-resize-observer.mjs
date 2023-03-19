import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, NgModule } from '@angular/core';

class ResizeDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.resized = new EventEmitter();
        this.observer = new ResizeObserver(entries => this.zone.run(() => this.observe(entries)));
    }
    ngOnInit() {
        this.observer.observe(this.element.nativeElement);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
    observe(entries) {
        const domSize = entries[0];
        const resizedEvent = new ResizeEvent(domSize.contentRect, this.oldRect);
        this.oldRect = domSize.contentRect;
        this.resized.emit(resizedEvent);
    }
}
ResizeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ResizeDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
ResizeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.3", type: ResizeDirective, selector: "[resized]", outputs: { resized: "resized" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ResizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[resized]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { resized: [{
                type: Output
            }] } });
class ResizeEvent {
    constructor(newRect, oldRect) {
        this.newRect = newRect;
        this.oldRect = oldRect;
        this.isFirst = oldRect == null;
    }
}

class ResizeObserverModule {
}
ResizeObserverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ResizeObserverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResizeObserverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: ResizeObserverModule, declarations: [ResizeDirective], exports: [ResizeDirective] });
ResizeObserverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ResizeObserverModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ResizeObserverModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ResizeDirective
                    ],
                    imports: [],
                    exports: [
                        ResizeDirective
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ResizeDirective, ResizeEvent, ResizeObserverModule };
//# sourceMappingURL=mikael-sundstrom-resize-observer.mjs.map
