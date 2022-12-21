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

  // если сервис не используется в шаблоне,
  // то внедряйте его как приватный
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }

  trackCartList(index: number, cartList: { id: number; }) {
    return cartList ? cartList.id : undefined;
  }

  // этот метод вызывается для каждого элемента, но удаляет всегда последний
  // ему надо задавать идентификатор объекта, чтобы он удалял конкретный объект, а не последний
  removeItem() {
    return this.cartList.pop();
  }

}
