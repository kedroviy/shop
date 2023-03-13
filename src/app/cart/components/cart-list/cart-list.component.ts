/* eslint-disable ngrx/no-typed-global-store */
import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/@ngrx';
import { CartObservableService } from './../../services/cart-observable.service';
import { CartList } from '../../models/cart.models';
import { CartService } from '../../services/cart.service';
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit {
  @Output() totalQuantityEmit = new EventEmitter<number>();

  cartList$!: Observable<CartList[]>;
  refreshCartList$ = new BehaviorSubject<boolean>(true);
  totalQuantity$!: Observable<number>;
  totalCost: number = 0;
  isEmptyCart: boolean = true;
  sortItems: string = 'title';
  isReverse: boolean = false;

  cartListLengthSub!: number;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService,
    private cartObservableService: CartObservableService,
  ) { }

  ngOnInit(): void {
    this.cartList$ = this.refreshCartList$.pipe(switchMap(() => this.cartObservableService.getCartList()));
    this.cartList$.subscribe((list) => {
      this.cartListLengthSub = list.length
    });
  }

  onQuantityIncrease(cartItem: CartList): void {
    this.cartService.onQuantityIncrease(cartItem);
  }

  onQuantityDecrease(cartItem: CartList): void {
    this.cartService.onQuantityDecrease(cartItem);
  }

  onDeleteItem(product: CartList): void {
    this.store.dispatch(ProductsActions.deleteProduct({ product }));
    // this.cartObservableService.deleteProduct(item).subscribe(v => v);
    // this.totalQuantity$ = this.cartList$.pipe(map(list => {
    //   this.totalQuantityEmit.emit(list.length);
    //   return list.length
    // }));
    this.refreshCartList$.next(true);
  }

  trackCartList(index: number, cartList$: { id: number; }) {
    return cartList$.id;
  }

}
