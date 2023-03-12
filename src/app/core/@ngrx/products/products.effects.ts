import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { type Observable, switchMap, map, concatMap, catchError, of } from 'rxjs';

import { CartObservableService } from 'src/app/cart/services/';
import { ProductsPromiseService } from 'src/app/products';
import * as ProductsActions from './products.actions';
import { CartList } from 'src/app/cart/models/cart.models';

@Injectable()
export class ProductsEffects {

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

    deleteCartProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.deleteProduct),
            map(action => action.product),
            concatMap((product: CartList) =>
                this.cartObservableService.deleteProduct(product).pipe(
                    map(() => ProductsActions.deleteProductSuccess({ product })),
                    catchError(error => of(ProductsActions.deleteProductError({ error })))
                )
            )
        )
    );
    // addProduct$: Observable<Action> = createEffect(() =>
    //     // this.actions$.pipe(
    //     //     ofType(ProductsActions.addProduct),
    //     //     map(action => action.product),
    //     //     concatMap((product: CartList) =>
    //     //         this.cartObservableService
    //     //             .addOnCartSimple(product))
    //     //             .then((addProduct: CartList) => {
    //     //             return TasksActions.addProductSuccess({ product: addProduct });
    //     //         })
    //     //         .catch(error => ProductActions.addProductError({ error }))
    //     // )
    // );

    constructor(
        private actions$: Actions,
        private productsPromiseService: ProductsPromiseService,
        private cartObservableService: CartObservableService,
    ) { console.log('[PRODUCTS EFFECTS]') }
}