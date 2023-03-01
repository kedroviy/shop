import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { STRINGS } from '../app-config/const/constants';
// import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isLoginDialogOpen: boolean = false;

  isAdminLog: boolean = false;

  @ViewChild('appTitle') appTitleElementRef!: ElementRef<HTMLHeadingElement>; 

  // constructor (public authService: AuthService) {}
  
  ngAfterViewInit() {
    const el = this.appTitleElementRef?.nativeElement;
    el.innerHTML = STRINGS.HEADER_TITLE.toUpperCase();
  };

  onOpenDialog():void {
    if (!this.isLoginDialogOpen) {
      this.isLoginDialogOpen = true;
    } else {
      this.isLoginDialogOpen = false;
    }
  };

  onCloseDialog(): void {
    this.isLoginDialogOpen = false;
  }

  // checkAdminLogged(): void {
  //   this.isAdminLog = this.authService.isAdmin;
  //   console.log('1')
  // }
}
