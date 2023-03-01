import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss']
})
export class AdminProductsListComponent implements OnInit {
  productList!: Observable<ProductModel[]>;
  
  constructor(
    public productService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  onEditProduct({ id }: any): void {
    const link = ['/admin/edit', id];
    this.router.navigate(link);
  }
}
