import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { type Observable, switchMap } from 'rxjs';

import { ProductsPromiseService } from 'src/app/products';


import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions, private productsPromiseService: ProductsPromiseService) {
        console.log('[PRODUCTS EFFECTS]');
    }

    getProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.getProducts),
            switchMap(action =>
                this.productsPromiseService
                    .getProducts()
                    .then(products => ProductsActions.getProductsSuccess({ products }))
                    .catch(error => ProductsActions.getProductsError({ error }))
            )
        )
    );

}