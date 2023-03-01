import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { CartListComponent } from './components';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent,
    data: {
        title: 'Cart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
