import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() backgroundColor: string = '#f8f9fa';

  constructor() { }

  @HostBinding("style.backgroundColor") bindBackgroundColor = '';

  @HostListener("mouseenter") onMouseEnter() {
    this.bindBackgroundColor = this.backgroundColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.bindBackgroundColor = ''
  }

}
