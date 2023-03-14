/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { type Observable, switchMap, map, concatMap, catchError, of } from 'rxjs';

import { CartObservableService } from 'src/app/cart/services/';
import { ProductsPromiseService } from 'src/app/products';
import { CartList } from 'src/app/cart/models/cart.models';

import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {

    getProducts$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductsActions.getProducts),
            switchMap(action =>
                this.productsPromiseService
                    .getProducts()
                    .then(products => ProductsActions.getProductsSuccess({ products }))
                    .catch(error => ProductsActions.getProductsError({ error }))
            )
        )
    }
    );

    deleteCartProduct$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductsActions.deleteProduct),
            map(action => action.product),
            concatMap((product: CartList) =>
                this.cartObservableService.deleteProduct(product).pipe(
                    map(() => ProductsActions.deleteProductSuccess({ product })),
                    catchError(error => of(ProductsActions.deleteProductError({ error })))
                )
            )
        )
    }
    );

    addProduct$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductsActions.addProduct),
            map(action => action.product),
            concatMap((product: CartList) =>
                this.cartObservableService
                    .addOnCartSimple(product).pipe(
                        map(() => ProductsActions.addProductSuccess({ product: product })),
                        catchError(error => of(ProductsActions.addProductError({ error })))
                    ))
        )
    });

    // createUpdateTaskSuccess$: Observable<Action> = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
    //         map(action =>
    //             RouterActions.go({
    //                 path: ['/products']
    //             })
    //         )
    //     );
    // });


    constructor(
        private actions$: Actions,
        private productsPromiseService: ProductsPromiseService,
        private cartObservableService: CartObservableService,
    ) { console.log('[PRODUCTS EFFECTS]') }
}