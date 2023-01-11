import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { STRINGS as STR_LIST } from '../../../../app-config/const/constants';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() products: ProductModel[] = [];
  @Output() onBoughtProduct = new EventEmitter<ProductModel>();

  STRINGS = STR_LIST;

  constructor() { }

  ngOnInit(): void {
  }

  public onAddToCart(product: ProductModel): void {
    this.onBoughtProduct.emit(product);
  }
}
