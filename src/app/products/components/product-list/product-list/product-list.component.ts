import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService, ProductsPromiseService } from 'src/app/products/';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList!: Promise<ProductModel[]>;
  
  constructor(
    private cartService: CartService,
    public productService: ProductsService,
    private productsPromiseServices: ProductsPromiseService,
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
    this.cartService.addOnCartSimple(productItem);
  }

}
