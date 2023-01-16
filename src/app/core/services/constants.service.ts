import { InjectionToken } from '@angular/core';

import { AppInfoModel } from '../models/core.models';

export const constantsService = {
  App: 'shop',
  Ver: '3.0',
  API_URL: 'https://github.com/kedroviy/shop',
}

export const Constants = new InjectionToken<AppInfoModel>('constantsService');
