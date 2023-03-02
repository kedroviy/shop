import { Injectable } from '@angular/core';

import { ConfigModel } from '../models/core.models';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  userSettings: Partial<ConfigModel> = {
    id: 1,
    login: 'admin',
    email: 'admin@admin',
  }

  constructor() { }

  getConfig() {
    return this.userSettings;
  }

  setConfig(config: Partial<ConfigModel>): void {
    this.userSettings = { ...this.userSettings, ...config };
  }

  setConfigProperty(key: keyof ConfigModel, value: any): void {
    this.userSettings[key] = value;
  }
}
