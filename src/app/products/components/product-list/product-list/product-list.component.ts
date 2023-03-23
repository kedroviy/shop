/* eslint-disable ngrx/no-typed-global-store */
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import type { Observable } from 'rxjs';

import { type ProductsState, type AppState, selectProductsState, ProductsFacade } from '../../../../core/@ngrx';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/';

import * as ProductsActions from '../../../../core/@ngrx/products/products.actions';
import * as RouterActions from '../../../../core/@ngrx/router/router.actions';

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
    private router: Router,
    private productsFacade: ProductsFacade
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
    this.store.dispatch(RouterActions.go({ path: link } ));
    // this.router.navigate(link);
  }

  addOnCart(product: ProductModel): void {
    this.productsFacade.addProduct({ product });
  }

}
