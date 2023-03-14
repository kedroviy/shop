import { createAction, props } from '@ngrx/store';

import { CartList } from 'src/app/cart/models/cart.models';
import { ProductModel } from './../../../products/models/product.model';

export const getProducts = createAction('[Product List Page (App)] GET_PRODUCTS');

export const getProductsSuccess = createAction(
    '[Get Products Effect] GET_PRODUCTS_SUCCEESS',
    props<{ products: ProductModel[] }>()
);

export const getProductsError = createAction(
    '[Get Products Effect] GET_PRODUCTS_ERROR',
    props<{ error: Error | string | null }>()
);


export const addProduct = createAction('[Add Product] ADD_PRODUCT',
    props<{ product: CartList }>()
);

export const addProductSuccess = createAction(
    '[Add Product Effect] ADD_PRODUCT_SUCCEESS',
    props<{ product: CartList }>()
);

export const addProductError = createAction(
    '[Add Products Effect] ADD_PRODUCTS_ERROR',
    props<{ error: Error | string | null }>()
);


export const createProduct = createAction(
    '[Product Admin Page] CREATE_PRODUCT',
    props<{ product: ProductModel }>()
);

export const createProductSuccess = createAction(
    '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
    props<{ product: ProductModel }>()
);

export const createProductError = createAction(
    '[Create Product Effect] CREATE_PRODUCT_ERROR',
    props<{ error: Error | string | null }>()
);


export const updateProduct = createAction(
    '[Product Admin Page] UPDATE_Product',
    props<{ product: ProductModel }>()
);

export const updateProductSuccess = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
    props<{ product: ProductModel }>()
);

export const updateProductError = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_ERROR',
    props<{ error: Error | string | null }>()
);

export const completeProduct = createAction(
    '[Product List Page] COMPLETE_PRODUCT',
    props<{ product: ProductModel }>()
);


export const deleteProduct = createAction(
    '[Delete Cart Product Effect] DELETE_PRODUCT',
    props<{ product: CartList }>()
);

export const deleteProductSuccess = createAction(
    '[Delete Cart Product Effect] DELETE_PRODUCT_SUCCESS',
    props<{ product: CartList }>()
);

export const deleteProductError = createAction(
    '[Delete Cart Product Effect] DELETE_PRODUCT_ERROR',
    props<{ error: Error | string | null }>()
);
