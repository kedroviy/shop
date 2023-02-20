import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;
  
  redirectUrl!: string;

  login(isAdmin: boolean = false): Observable<boolean> {
    return of(true).pipe(
      tap(val => {
        this.isLoggedIn = val;
        this.isAdmin = isAdmin;
      })
    );
  }
  
  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}
