import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import type { ProductModel } from 'src/app/products/models/product.model';
import { API } from '../../../app-config/const/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {
  private url = API.productsUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Promise<ProductModel[]> {
    const request$ = this.http.get(this.url);
    return firstValueFrom(request$)
      .then(response => response as ProductModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
