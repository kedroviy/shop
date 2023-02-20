import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { ProductListComponent, ProductViewComponent } from './components';

const routes: Routes = [
    {
        path: 'products',
        component: ProductListComponent,
        data: {
            title: 'products'
        },
    },
    {
        path: 'product-view/:productID',
        component: ProductViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
