import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() onBoughtProduct: EventEmitter<ProductModel[]> = new EventEmitter();

  productList!: Observable<ProductModel[]>;

  constructor(private cartService: CartService, public productService: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  addOnCart(productItem: ProductModel): void {
    this.cartService.addOnCartSimple(productItem)
  }

}
