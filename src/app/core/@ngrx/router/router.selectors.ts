import { createFeatureSelector } from '@ngrx/store';
import { type RouterReducerState, getSelectors } from '@ngrx/router-store';

// import { ProductsState, selectProductsState } from '../products';

const routerFeatureKey = 'router';

export const selectRouterState =
    createFeatureSelector<RouterReducerState>(routerFeatureKey);

export const {
    selectQueryParams, // select the current route query params
    selectRouteParams, // select the current route params
    selectRouteData, // select the current route data
    selectUrl // select the current url
} = getSelectors(selectRouterState);

