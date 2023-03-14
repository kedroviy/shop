import { type NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export enum RouterActionTypes {
    Go = '[Router] Go',
    Back = '[Router] Back'
}

export const go = createAction(RouterActionTypes.Go,
    props<{ path: any[]; queryParams?: object; extras?: NavigationExtras }>()
);

export const back = createAction(RouterActionTypes.Back);