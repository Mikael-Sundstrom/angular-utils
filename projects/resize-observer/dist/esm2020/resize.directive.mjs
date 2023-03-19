import { Directive, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ResizeDirective {
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
export class ResizeEvent {
    constructor(newRect, oldRect) {
        this.newRect = newRect;
        this.oldRect = oldRect;
        this.isFirst = oldRect == null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUE2QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBS3RHLE1BQU0sT0FBTyxlQUFlO0lBTTNCLFlBQ2tCLE9BQW1CLEVBQ25CLElBQVk7UUFEWixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFFN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFBO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMxRixDQUFDO0lBRU0sUUFBUTtRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVNLFdBQVc7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRU8sT0FBTyxDQUFDLE9BQThCO1FBQzdDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQixNQUFNLFlBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUE7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7NEdBM0JXLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUgzQixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxXQUFXO2lCQUNyQjtzSEFLMEIsT0FBTztzQkFBaEMsTUFBTTs7QUEwQlIsTUFBTSxPQUFPLFdBQVc7SUFLdkIsWUFBbUIsT0FBd0IsRUFBRSxPQUFvQztRQUNoRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUE7SUFDL0IsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tyZXNpemVkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRwcml2YXRlIG9ic2VydmVyOiBSZXNpemVPYnNlcnZlclxyXG5cdHByaXZhdGUgb2xkUmVjdD86IERPTVJlY3RSZWFkT25seVxyXG5cclxuXHRAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IHJlc2l6ZWRcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSByZWFkb25seSB6b25lOiBOZ1pvbmVcclxuXHQpIHtcclxuXHRcdHRoaXMucmVzaXplZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KClcclxuXHRcdHRoaXMub2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMub2JzZXJ2ZShlbnRyaWVzKSkpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblx0XHR0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvYnNlcnZlKGVudHJpZXM6IFJlc2l6ZU9ic2VydmVyRW50cnlbXSk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZG9tU2l6ZSA9IGVudHJpZXNbMF1cclxuXHRcdGNvbnN0IHJlc2l6ZWRFdmVudCA9IG5ldyBSZXNpemVFdmVudChkb21TaXplLmNvbnRlbnRSZWN0LCB0aGlzLm9sZFJlY3QpXHJcblx0XHR0aGlzLm9sZFJlY3QgPSBkb21TaXplLmNvbnRlbnRSZWN0XHJcblx0XHR0aGlzLnJlc2l6ZWQuZW1pdChyZXNpemVkRXZlbnQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzaXplRXZlbnQge1xyXG5cdHB1YmxpYyBuZXdSZWN0OiBET01SZWN0UmVhZE9ubHlcclxuXHRwdWJsaWMgb2xkUmVjdD86IERPTVJlY3RSZWFkT25seVxyXG5cdHB1YmxpYyBpc0ZpcnN0OiBib29sZWFuXHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihuZXdSZWN0OiBET01SZWN0UmVhZE9ubHksIG9sZFJlY3Q6IERPTVJlY3RSZWFkT25seSB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5uZXdSZWN0ID0gbmV3UmVjdFxyXG5cdFx0dGhpcy5vbGRSZWN0ID0gb2xkUmVjdFxyXG5cdFx0dGhpcy5pc0ZpcnN0ID0gb2xkUmVjdCA9PSBudWxsXHJcblx0fVxyXG59Il19