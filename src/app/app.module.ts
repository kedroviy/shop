import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { httpInterceptorProviders } from './core';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrdersModule,
    SharedModule,
    ProductsModule,
    CartModule,
    MatButtonModule,
    // StoreModule.forRoot({}, {}),
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule.forRoot(),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    RootStoreModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
