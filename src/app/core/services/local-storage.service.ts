import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }

  setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data))
  }

  removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }

}

export const LocalStorage = new InjectionToken<LocalStorageService>('storageService');