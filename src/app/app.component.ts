import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectQueryParams,
  selectRouteParams,
  selectRouteData,
  selectUrl
} from './core/@ngrx'

import { STRINGS } from '../app-config/const/constants';
import { merge, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  isLoginDialogOpen: boolean = false;

  isAdminLog: boolean = false;

  @ViewChild('appTitle') appTitleElementRef!: ElementRef<HTMLHeadingElement>;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    // Router Selectors Demo
    const url$ = this.store.select(selectUrl);
    const queryParams$ = this.store.select(selectQueryParams);
    const routeParams$ = this.store.select(selectRouteParams);
    const routeData$ = this.store.select(selectRouteData);
    const source$ = merge(url$, queryParams$, routeParams$, routeData$);
    source$.pipe(tap(val => console.log(val))).subscribe();
  }

  ngAfterViewInit() {
    const el = this.appTitleElementRef?.nativeElement;
    el.innerHTML = STRINGS.HEADER_TITLE.toUpperCase();
  }

  onOpenDialog(): void {
    if (!this.isLoginDialogOpen) {
      this.isLoginDialogOpen = true;
    } else {
      this.isLoginDialogOpen = false;
    }
  }

  onCloseDialog(): void {
    this.isLoginDialogOpen = false;
  }
}
