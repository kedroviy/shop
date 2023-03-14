import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productsFeatureKey } from '../app.state';
import { ProductsState } from './products.state';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);

export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);
