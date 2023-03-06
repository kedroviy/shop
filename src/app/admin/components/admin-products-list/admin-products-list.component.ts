import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ProductsPromiseService } from 'src/app/products';
import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss']
})
export class AdminProductsListComponent implements OnInit {
  productList!: Promise<ProductModel[]>;
  
  constructor(
    public productService: ProductsService,
    private productsPromiseServices: ProductsPromiseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productList = this.productsPromiseServices.getProducts();
  }

  onEditProduct({ id }: any): void {
    const link = ['/admin/edit', id];
    this.router.navigate(link);
  }
}
