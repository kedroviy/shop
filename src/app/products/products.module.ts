import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

import { ProductListComponent, ProductComponent, ProductViewComponent  } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductViewComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
  ]
})
export class ProductsModule { }
