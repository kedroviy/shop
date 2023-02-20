import { Component, EventEmitter, Input, Output } from '@angular/core';

import { STRINGS as STR_LIST } from '../../../../app-config/const/constants';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.scss']
})
export class AdminProductItemComponent {
  @Input() product!: ProductModel;
  @Output() editProduct = new EventEmitter<ProductModel>();

  STRINGS = STR_LIST;

  onEditProduct(): void {
    this.editProduct.emit(this.product);
  }
}
