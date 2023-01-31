import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { STRINGS as STR_LIST } from '../../../../app-config/const/constants';

import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() onBoughtProduct = new EventEmitter<ProductModel>();

  STRINGS = STR_LIST;

  constructor() { }

  ngOnInit(): void {
  }

  public onAddToCart(product: ProductModel): void {
    this.onBoughtProduct.emit(product);
  }
}
