import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
  ]
})
export class ProductsModule { }
