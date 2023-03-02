import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService, ProductsPromiseService } from 'src/app/products/';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList!: Promise<ProductModel[]>;
  
  constructor(
    public productService: ProductsService,
    private productsPromiseServices: ProductsPromiseService,
    private cartObservableService: CartObservableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productList = this.productsPromiseServices.getProducts();
  }

  onViewProduct(product: ProductModel): void {
    this.productService.setViewProductItem(product);
    const link = ['/product-view', product.title + '-' + product.id];
    this.router.navigate(link);
  }

  addOnCart(productItem: ProductModel): void {
    this.cartObservableService.addOnCartSimple(productItem).subscribe(response => response);
  }

}
