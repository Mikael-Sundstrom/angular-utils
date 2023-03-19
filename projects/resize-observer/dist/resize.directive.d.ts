import { ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ResizeDirective implements OnInit, OnDestroy {
    private readonly element;
    private readonly zone;
    private observer;
    private oldRect?;
    readonly resized: any;
    constructor(element: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private observe;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResizeDirective, "[resized]", never, {}, { "resized": "resized"; }, never, never, false, never>;
}
export declare class ResizeEvent {
    newRect: DOMRectReadOnly;
    oldRect?: DOMRectReadOnly;
    isFirst: boolean;
    constructor(newRect: DOMRectReadOnly, oldRect: DOMRectReadOnly | undefined);
}
