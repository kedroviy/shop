import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  productItem!: ProductModel;

  constructor(public productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productItem = this.productService.getViewProductItem();
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
