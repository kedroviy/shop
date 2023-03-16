import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        const { keyCode, shiftKey } = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
            // Allow: Ctrl+C
            (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
            // Allow: Ctrl+V
            (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
            // Allow: Ctrl+X
            (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        if (
            (shiftKey || (keyCode < 48 || keyCode > 57)) &&
            (keyCode < 96 || keyCode > 105)
        ) {
            event.preventDefault();
        }
    }
}