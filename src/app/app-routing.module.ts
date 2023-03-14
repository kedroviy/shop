import { NgModule } from '@angular/core';
import {
  type Routes,
  RouterModule,
} from '@angular/router';

import { CartListComponent } from './cart';
import { AuthGuard } from './core/guards/auth.guard';
import { IsCartEmptyGuard } from './core/guards/is-cart-empty.guard';
import { ProcessOrderComponent } from './orders';
import { ProductListComponent } from './products';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'cart',
    component: CartListComponent,
  },
  {
    path: 'order',
    component: ProcessOrderComponent,
    canActivate: [IsCartEmptyGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    canActivateChild: [AuthGuard],
  },
  // {
  //   path: 'users',
  //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  //   data: { preload: true },
  // },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
