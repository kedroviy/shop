import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

import { ProductsService } from 'src/app/products/services/products.service';
import { STRINGS as STR_CONST } from '../../../../../app-config/const/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[] = [];
  // такие записи выглядят не очень понятными
  // STRINGS = STRINGS;
  STRINGS = STR_CONST;

  // если сервис не предполагается использовать в шаблоне,
  // то внедряйте его как приватный
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

}
