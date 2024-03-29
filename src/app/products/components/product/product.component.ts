import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { STRINGS as STR_LIST } from '../../../../app-config/const/constants';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() isAdminLogged: boolean = false;
  @Input() product!: ProductModel;
  @Output() boughtProduct = new EventEmitter<ProductModel>();
  @Output() productView = new EventEmitter<ProductModel>();

  STRINGS = STR_LIST;

  public onAddToCart(product: ProductModel): void {
    this.boughtProduct.emit(product);
  }

  public onViewProduct(product: ProductModel): void {
    this.productView.emit(product);
  }
}
