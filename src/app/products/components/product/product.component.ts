import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { STRINGS as STR_LIST } from '../../../../app-config/const/constants';
import { CartService } from 'src/app/cart/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() onBoughtProduct = new EventEmitter<ProductModel>();

  productList: ProductModel[] = [];

  STRINGS = STR_LIST;

  constructor(
    private productService: ProductsService,
    ) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  public onAddToCart(product: ProductModel): void {
    this.onBoughtProduct.emit(product);
  }
}
