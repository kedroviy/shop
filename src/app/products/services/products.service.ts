import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { of } from 'rxjs'

import * as productsData from '../../../assets/products.json';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  data = productsData; 

  getProducts(): Observable<any> {
    return of(this.data.productsList);
  }
}
