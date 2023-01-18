import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

}

export const LocalStorage = new InjectionToken<LocalStorageService>('storageService');