import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  productItem!: ProductModel;

  constructor(public productService: ProductsService, private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.productItem = this.productService.getViewProductItem();
  }

  onBack(): void {
    this.store.dispatch(RouterActions.go({
      path: ['/products']
    }));

    // this.router.navigate(['/products']);
  }
}
