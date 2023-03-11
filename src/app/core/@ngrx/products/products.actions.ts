import { createAction, props } from '@ngrx/store';

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


export const getProduct = createAction(
    '[Add/Edit Product Page (App)] GET_PRODUCT',
    props<{ productID: number }>()
);

export const createProduct = createAction(
    '[Product Form Page] CREATE_PRODUCT',
    props<{ product: ProductModel }>()
);

export const updateProduct = createAction(
    '[Produc Form Page] UPDATE_PRODUCT',
    props<{ product: ProductModel }>()
);

export const completeProduct = createAction(
    '[Product List Page] COMPLETE_PRODUCT',
    props<{ product: ProductModel }>()
);

export const deleteProduct = createAction(
    '[Product List Page] DELETE_PRODUCT',
    props<{ product: ProductModel }>()
);
