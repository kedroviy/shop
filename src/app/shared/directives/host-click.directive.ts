import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostClick]'
})
export class HostClickDirective {

  @Input() color: string = 'blue';
  item!: HTMLElement;

  constructor(
    private renderer: Renderer2,
    element: ElementRef
  ) {
    this.item = element.nativeElement;
  }

  @HostListener('click')
  clicked(): void {
    this.renderer.setStyle(this.item, 'color', this.color);
  }

}
