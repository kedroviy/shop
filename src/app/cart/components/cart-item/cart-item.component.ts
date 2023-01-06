import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { CartList } from '../../models/cart.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit, DoCheck {
  @Output() onIncrease: EventEmitter<CartList> = new EventEmitter();
  @Output() onDecrese: EventEmitter<CartList> = new EventEmitter();
  @Output() onDeleteHandler: EventEmitter<number> = new EventEmitter();

  cartList: CartList[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }

  ngDoCheck(): void {

  }

  onQuantityIncrease(cartItem: CartList) {
    this.onIncrease.emit(cartItem)
  }

  onQuantityDecrease(cartItem: CartList) {
    this.onDecrese.emit(cartItem)
  }

  onDeleteItem(id: number) {
    this.onDeleteHandler.emit(id)
  }

  trackCartList(index: number, cartList: { id: number; }) {
    return cartList ? cartList.id : undefined;
  }
}
