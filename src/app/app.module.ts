import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { AppComponent } from './app.component';
import { FirstComponent } from './shared/components/custom-components/first/first.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './products/services/products.service';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { CartService } from './cart/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
