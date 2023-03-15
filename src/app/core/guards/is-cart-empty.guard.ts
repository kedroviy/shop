import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanActivate {
  isEmptyCart: boolean = true;

  constructor(private cartService: CartService, private router: Router,) { }

  onCheckEmptyCart(): void {
    if (this.cartService.returnTotalLength() === 0) {
      this.isEmptyCart = true;
    } else {
      this.isEmptyCart = false;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.onCheckEmptyCart();

    if (this.isEmptyCart) {
      confirm('Cart is Empty! Add some product in cart!');
      return false;
    } else {
      return true;
    }
  };

}
