import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() productItem: ProductModel[] = [];
  @Output() onBoughtProduct: EventEmitter<ProductModel> = new EventEmitter();

  productList: ProductModel[] = [];

  constructor(private cartService: CartService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productList = data.productsList
    });
  }

  addOnCart(productItem: ProductModel): void {
    this.cartService.addOnCartSimple(productItem)
  }

}
