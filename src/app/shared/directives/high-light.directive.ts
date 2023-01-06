import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(element: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    console.log('1');
  }

}
