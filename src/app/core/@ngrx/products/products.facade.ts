import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { type NavigationExtras } from '@angular/router';

import { selectProductsData, selectProductsError } from './product.selectors';
import * as RouterActions from '../router/router.actions';
import * as ProductActions from '../products/products.actions';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartList } from 'src/app/cart/models/cart.models';

@Injectable({
    providedIn: 'root'
})
export class ProductsFacade {
    tasks$: Observable<ReadonlyArray<ProductModel>>;
    tasksError$: Observable<Error | string | null>;
    constructor(private store: Store) {
        this.tasks$ = this.store.select(selectProductsData);
        this.tasksError$ = this.store.select(selectProductsError);
    }
    deleteProduct(props: { product: CartList }) {
        this.store.dispatch(ProductActions.deleteProduct(props));
    }
    addProduct(props: { product: ProductModel }) {
        this.store.dispatch(ProductActions.addProduct(props));
    }
    // TODO: should it be moved to RouterFacade?
    goTo(props: {
        path: any[];
        queryParams?: object;
        extras?: NavigationExtras;
    }) {
        this.store.dispatch(RouterActions.go(props));
    }
}
