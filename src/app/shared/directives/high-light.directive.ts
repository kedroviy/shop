import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() backgroundColor: string = '#f8f9fa';
  @Input() boxShadow: string = '0px 0px 14px -8px rgba(18, 22, 26, 0.733);';
  constructor() { }

  @HostBinding("style.backgroundColor") bindBackgroundColor:string = '';

  @HostListener("mouseenter") onMouseEnter() {
    this.bindBackgroundColor = this.backgroundColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.bindBackgroundColor = ''
  }

}
