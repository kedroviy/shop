import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, type HttpErrorResponse } from '@angular/common/http';
import { type Observable, throwError, catchError, retry, share, concatMap } from 'rxjs';

import { ShopAPI } from 'src/app/core/services/constants.service';
import { type CartList } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {

  constructor(private http: HttpClient, @Inject(ShopAPI) private cartUrl: string) { }

  getCartList(): Observable<CartList[]> {
    return this.http.get<CartList[]>(this.cartUrl).pipe(
      retry(1),
      share(),
      catchError(this.handleError)
    );
  }

  addOnCartSimple(product: CartList): Observable<CartList> {
    const url: string = this.cartUrl;
    const body = JSON.stringify(product);

    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };

    return this.http
      .post<CartList>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  updateUser(product: CartList) { }

  deleteProduct(product: CartList): Observable<CartList[]> {
    const url = `${this.cartUrl}/${product.id}`;
  
    return this.http.delete(url).pipe(
      concatMap(() => this.getCartList()),
      catchError(this.handleError)
    );
  }
}
