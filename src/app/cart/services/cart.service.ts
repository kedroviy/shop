import { Injectable } from '@angular/core';
import { CartList } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartList(): CartList[]{
    return [
      {
        id: 1,
        name: 'milk',
        price: 1.85,
      },
      {
        id: 2,
        name: 'cookies',
        price: 2,
      }
    ]
  }
}
