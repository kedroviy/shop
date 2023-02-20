import { Injectable } from '@angular/core';
import { CartList } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartList: CartList[] = [];
  constructor() { }

  onQuantityIncrease(cartItem: CartList) {
    this.cartList.map(listItem => {
      if(listItem.description === cartItem.description) {
        listItem.quantity ? listItem.quantity += 1 : listItem.quantity = 1
        listItem.price += cartItem.price
      }
    })
  }

  onQuantityDecrease(cartItem: CartList) {
    this.cartList.map(listItem => {
      if(listItem.description === cartItem.description) {
        listItem.quantity ? listItem.quantity -= 1 : null;
        listItem.price -= cartItem.price
      }
    })
  }

  onDeleteItem(product: CartList): void {
    let newCart = this.cartList.filter(el => el.id !== product.id);
    this.cartList = [...newCart];
  }

  getCartList(): CartList[]{
    return this.cartList;
  }

  addOnCartSimple(product: CartList): void {
    const equalCartItem = this.cartList.filter(cartItem => cartItem.description === product.description);
    
    if(equalCartItem.length) {
      console.log('already in cart');
    } else {
      this.cartList.push(product)
    }
  }

  totalCost(): number {
    let resultArray: number[] = [];
    let resultCost: number = 0;

    for(let cartItem of this.cartList) {
      resultArray.push(cartItem.price)
    }

    resultCost = resultArray.reduce((sum, item) => sum + item, 0);
    return Number(resultCost.toFixed(2))
  }


  totalQuantity(): number {
    return this.cartList?.length
  }

  isEmptyCart(): boolean {
    if(!this.cartList?.length) {
      return true
    } else {
      return false
    }
  }

}
