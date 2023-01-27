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
  @Output() onIncrease: EventEmitter<CartList> = new EventEmitter();
  @Output() onDecrese: EventEmitter<CartList> = new EventEmitter();
  @Output() onDeleteHandler: EventEmitter<CartList> = new EventEmitter();

  cartList!: CartList[];

  constructor() { }

  onQuantityIncrease(cartItem: CartList) {
    this.onIncrease.emit(cartItem)
  }

  onQuantityDecrease(cartItem: CartList) {
    this.onDecrese.emit(cartItem)
  }

  onDeleteItem():void {
    this.onDeleteHandler.emit(this.cartItem)
  }

  trackCartList(index: number, cartList: { id: number; }) {
    return cartList ? cartList.id : undefined;
  }
}
