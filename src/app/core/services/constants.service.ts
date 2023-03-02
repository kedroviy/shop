import { InjectionToken } from '@angular/core';

import { AppInfoModel } from '../models/core.models';

export const constantsService = {
  App: 'shop',
  Ver: '3.0',
  API_URL: 'https://github.com/kedroviy/shop',
}

export const Constants = new InjectionToken<AppInfoModel>('constantsService');

export const ShopAPI = new InjectionToken<string>('shopAPI', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/cartList'
});