import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('appTitle') appTitleElementRef!: ElementRef<HTMLHeadingElement>; 

  ngAfterViewInit() {
    const el = this.appTitleElementRef?.nativeElement;
    el.innerHTML = 'Shop'
  }
}
