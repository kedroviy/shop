import { Component, DoCheck, OnInit } from '@angular/core';
import { CartList } from '../../models/cart.models';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck {
  cartList!: CartList[];
  totalQuantity: number = 0;
  totalCost: number = 0;
  isEmptyCart: boolean = false;
  sortItems!: keyof CartList;
  isReverse: boolean = false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    this.totalQuantity = this.cartService.totalQuantity();
    this.cartService.totalCost();
  }

  ngDoCheck(): void {
    this.totalQuantity = this.cartService.totalQuantity();
    this.totalCost = this.cartService.totalCost();
    this.isEmptyCart = this.cartService.isEmptyCart();
    this.cartList = this.cartService.getCartList();
  }

  onQuantityIncrease(cartItem: CartList): void {
    this.cartService.onQuantityIncrease(cartItem);
  }

  onQuantityDecrease(cartItem: CartList): void {
    this.cartService.onQuantityDecrease(cartItem);
  }

  onDeleteItem(item: CartList): void {
    this.cartService.onDeleteItem(item);
  }

  trackCartList(index: number, cartList: { id: number; }) {
    return cartList ? cartList.id : undefined;
  }

}
