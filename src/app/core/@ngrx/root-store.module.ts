import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

import { routerReducers, CustomSerializer, RouterEffects } from './router';
import { metaReducers } from './meta-reducers';
import { ProductsStoreModule } from './products/products-store.module'
import { environment } from './../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer // has a priority over routerState
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }) : [],
    ProductsStoreModule,
  ]
})
export class RootStoreModule { }
