import { Injectable } from '@angular/core';

import { ConfigModel } from '../models/core.models';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  userSettings: ConfigModel = {
    id: 1,
    login: 'Admin',
    email: 'admin@admin'
  }
  constructor() { }
}
