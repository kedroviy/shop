import { Component, DoCheck, OnInit } from '@angular/core';
import { CartList } from '../../models/cart.models';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck {
  cartList: CartList[] = [];
  totalQuantity: number = 0;
  totalCost: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.totalQuantity = this.cartService.totalQuantity();
    this.cartService.totalCost();
  }

  ngDoCheck(): void {
    this.totalQuantity = this.cartService.totalQuantity();
    this.totalCost = this.cartService.totalCost();
  }

  trackCartList(index: number, cartList: { id: number; }) {
    return cartList ? cartList.id : undefined;
  }

  onQuantityIncrease(cartItem: CartList): void {
    this.cartService.onQuantityIncrease(cartItem)
  }

  onQuantityDecrease(cartItem: CartList): void {
    this.cartService.onQuantityDecrease(cartItem)
  }
}
