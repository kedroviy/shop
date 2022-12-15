import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

import { ProductsService } from 'src/app/products/services/products.service';
import { STRINGS } from '../../../../../app-config/const/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[] = [];
  STRINGS = STRINGS;

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

}
