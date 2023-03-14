/* eslint-disable ngrx/no-typed-global-store */
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import type { Observable } from 'rxjs';

import { type ProductsState, type AppState, selectProductsState } from '../../../../core/@ngrx';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';

import * as ProductsActions from '../../../../core/@ngrx/products/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsState$!: Observable<ProductsState>;
  applicationSettings: any = '../../../assets/app-settings.json';

  constructor(
    private store: Store<AppState>,
    public productService: ProductsService,
    private cartObservableService: CartObservableService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('We have a store! ', this.store);

    // this.productsState$ = this.store.select(productsFeatureKey);
    this.productsState$ = this.store.select(selectProductsState);
    this.store.dispatch(ProductsActions.getProducts());
  }

  onViewProduct(product: ProductModel): void {
    this.productService.setViewProductItem(product);
    const link = ['/product-view', product.title + '-' + product.id];
    this.router.navigate(link);
  }

  addOnCart(product: ProductModel): void {
    this.store.dispatch(ProductsActions.addProduct({ product }));
  }

}
