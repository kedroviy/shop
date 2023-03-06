import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  showItem: any;

  setViewProductItem(product: ProductModel): void {
    this.showItem = product;
  }

  getViewProductItem(): any {
    if(this.showItem) {
      return this.showItem;
    }
  }
}
