import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { STRINGS } from '../app-config/const/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('appTitle') appTitleElementRef!: ElementRef<HTMLHeadingElement>; 

  ngAfterViewInit() {
    const el = this.appTitleElementRef?.nativeElement;
    el.innerHTML = STRINGS.HEADER_TITLE.toUpperCase();
  }
}
