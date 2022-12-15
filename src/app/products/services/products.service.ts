import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: ProductModel[] = [];

  constructor(){}

  getProducts(): Array<ProductModel> {
    return [
      {
        id: 1,
        title: "milk",
        description: "milk 2.8%",
        price: 1.86,
        isAvalableInStore: true
      },
      {
        id: 2,
        title: "cookies",
        description: "chocolate coockies",
        price: 3,
        isAvalableInStore: true
      },
      {
        id: 3,
        title: "water",
        description: "natural water",
        price: 1.15,
        isAvalableInStore: true
      }]
  }
}
