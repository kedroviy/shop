import { ProductModel } from 'src/app/products/models/product.model';
import { Injectable } from '@angular/core';
import { CartList } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: CartList[] = [
    {
      id: 1,
      title: "bread",
      description: "chocolate bread",
      price: 1,
      isAvalableInStore: true,
    },
    {
      id: 2,
      title: "cookies",
      description: "chocolate coockies",
      price: 5,
      isAvalableInStore: true
    },
    {
      id: 3,
      title: "snikers",
      description: "simple",
      price: 4,
      isAvalableInStore: true
    },
    {
      id: 4,
      title: "pasta",
      description: "pasta 001",
      price: 2.8,
      isAvalableInStore: true
    },
    {
      id: 5,
      title: "water",
      description: "natural water",
      price: 3,
      isAvalableInStore: true
    },
    {
      id: 6,
      title: "milk",
      description: "from cow",
      price: 3,
      isAvalableInStore: true
    }
  ]
  constructor() { }

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
    return this.cartList.length
  }

  onDeleteItem(id: number) {
    return this.cartList.splice(id, 1);
  }
}
