import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { of } from 'rxjs'

import * as productsData from '../../../assets/products.json';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  data = productsData; 
  showItem: any;

  getProducts(): Observable<any> {
    return of(this.data.productsList);
  }

  setViewProductItem(product: ProductModel): void {
    this.showItem = product;
  }

  getViewProductItem(): any {
    if(this.showItem) {
      return this.showItem;
    }
  }
}
