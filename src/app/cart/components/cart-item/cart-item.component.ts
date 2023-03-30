/* eslint-disable @angular-eslint/no-output-on-prefix */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartList } from '../../models/cart.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem!: CartList;
  @Output() increase: EventEmitter<CartList> = new EventEmitter();
  @Output() decrese: EventEmitter<CartList> = new EventEmitter();
  @Output() deleteHandler: EventEmitter<CartList> = new EventEmitter();

  cartList!: CartList[];

  constructor() { }

  onQuantityIncrease(cartItem: CartList) {
    this.increase.emit(cartItem)
  }

  onQuantityDecrease(cartItem: CartList) {
    this.decrese.emit(cartItem)
  }

  onDeleteItem(): void {
    this.deleteHandler.emit(this.cartItem)
  }

  trackCartList(index: number, cartList: { id: number; }) {
    return cartList ? cartList.id : undefined;
  }
}
