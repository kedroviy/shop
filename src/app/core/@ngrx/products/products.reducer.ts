import { createReducer, on } from '@ngrx/store';

import { initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';
import { ProductModel } from 'src/app/products/models/product.model';

export const reducer = createReducer(
    initialProductsState,
    on(ProductsActions.getProducts, state => {
        console.log('GET_RODUCTS action being handled!');
        return {
            ...state,
            loading: true
        };
    }),
    on(ProductsActions.getProductsSuccess, (state, { products }) => {
        console.log('GET_PRODUCTS_SUCCESS action being handled!');
        const data = [...products];
        return {
            ...state,
            data,
            loading: false,
            loaded: true
        };
    }),
    on(ProductsActions.getProductsError, (state, { error }) => {
        console.log('GET_PRODUCTS_ERROR action being handled!');
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        };
    }),
    on(ProductsActions.addProduct, (state) => {
        console.log('ADD_PRODUCT action being handled!');
        return {
            ...state,
            loading: true
        };
    }),
    on(ProductsActions.addProductSuccess, (state, { product }) => {
        console.log('ADD_PRODUCT action being handled!');
        const data = [...state.data, { ...product }];
        return {
            ...state,
            data,
            loading: false,
            loaded: true
        };
    }),
    on(ProductsActions.createProduct, state => {
        console.log('CREATE_PRODUCT action being handled!');
        return { ...state };
    }),
    on(ProductsActions.updateProduct, state => {
        console.log('UPDATE_PRODUCT action being handled!');
        return { ...state };
    }),
    on(ProductsActions.completeProduct, state => {
        console.log('COMPLETE_PRODUCT action being handled!');
        return { ...state };
    }),
    on(ProductsActions.deleteProduct, state => {
        console.log('DELETE_PRODUCT action being handled!');
        return { ...state };
    }),
    on(ProductsActions.completeProduct, (state, { product }) => {
        console.log('COMPLETE_PRODUCT action being handled!');
        const id = product.id;
        const data = state.data.map(t => {
            if (t.id === id) {
                return { ...product, done: true } as ProductModel;
            }
            return t;
        });
        return {
            ...state,
            data
        };
    })

);
