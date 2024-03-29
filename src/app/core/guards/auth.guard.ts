import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import type {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn) { return true; }

    this.authService.redirectUrl = url
    return false
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivate Guard is called');
    const { url } = state;
    return this.checkLogin(url);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean |
    UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivateChild Guard is called');
    const { url } = state;
    console.log(this.checkLogin(url))
    return this.checkLogin(url);
  }

}
