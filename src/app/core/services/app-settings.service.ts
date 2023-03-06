import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, retry, tap, throwError } from 'rxjs';


import { AppSettings } from '../models/app-settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  applicationSettings: string = '../../../assets/app-settings.json';

  constructor(
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient,
  ) { }

  private getAppSettingsFromLocalStorage(key: string): AppSettings | null {
    const settings = this.localStorageService.getItem(key)
    return settings ? JSON.parse(settings) : null
  }

  getAppSettings(key: string): Observable<AppSettings | null> {
    const settings = this.getAppSettingsFromLocalStorage(key)
    if (!settings) {
      return this.getAppSettingsFromFile(key)
        .pipe(
          tap(s => this.setAppSettings(s, key)),
          catchError((e) => {
            console.log(e)
            return of(null)
          })
        )
    }
    return of(settings)
  }

  setAppSettings(settings: AppSettings, key: string): void {
    this.localStorageService.setItem(key, JSON.stringify(settings))
  }

  private getAppSettingsFromFile(key: string): Observable<AppSettings> {
    return this.httpClient
      .get<{ [name: string]: AppSettings }>(this.applicationSettings)
      .pipe(
        retry({ count: 2, delay: 1000 }),
        catchError(this.handleError),
        map(setting => {
          if (setting && setting[key] && setting[key].key) {
            console.log(setting[key])
            return setting[key]
          } else {
            throw new Error('No settings')
          }
        })
      )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('Detected error ', error.error)
    } else {
      console.error('Backend code ', error.status)
    }

    return throwError(
      () => new Error('Unexpected error')
    )
  }
}
