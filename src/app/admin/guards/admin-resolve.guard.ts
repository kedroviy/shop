import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, EMPTY, Observable, of, switchMap, take } from 'rxjs';

import { AdminModel } from '../models/admin.model';
import { AdminArrayService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AdminResolveGuard implements Resolve<AdminModel> {
  constructor(
    private adminArrayService: AdminArrayService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<AdminModel> {
    console.log('AdminResolve Guard is called');
    if (!route.paramMap.has('adminID')) {
      return of(new AdminModel(null, '', ''));
    }
    
    const id = route.paramMap.get('adminID')!;
    return this.adminArrayService.getAdmin(id).pipe(
      switchMap((user: AdminModel) => {
        if (user) {
          return of(user);
        } else {
          this.router.navigate(['/admin']);
          return EMPTY;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/admin']);
        // catchError MUST return observable
        return EMPTY;
      }),
    );
  }
}
