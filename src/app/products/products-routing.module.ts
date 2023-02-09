import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { ProductListComponent } from './components';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    data: {
        title: 'products'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
