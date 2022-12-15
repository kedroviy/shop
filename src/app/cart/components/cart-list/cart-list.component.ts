import { Component, OnInit } from '@angular/core';
import { CartList } from '../../models/cart.models';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartList: CartList[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }

  trackCartList(index: number, cartList: { id: number; }) {
      return cartList ? cartList.id : undefined;

  }

}
