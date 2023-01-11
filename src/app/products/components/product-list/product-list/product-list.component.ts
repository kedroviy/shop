import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

import { ProductModel } from 'src/app/products/models/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // Для чего эти инпуты и аутпут?
  @Input() products: ProductModel[] = [];
  @Input() productItem: ProductModel[] = [];
  @Output() onBoughtProduct: EventEmitter<ProductModel> = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  addOnCart(productItem: ProductModel): void {
    this.cartService.addOnCartSimple(productItem)
  }

}
