/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { type Observable, EMPTY, of, throwError, switchMap, catchError } from 'rxjs';

import { AdminModel } from '../models/admin.model';

const adminList: Array<AdminModel> = [
  new AdminModel(1, 'Anna', 'Borisova'),
  new AdminModel(2, 'Boris', 'Vlasov'),
  new AdminModel(3, 'Gennadiy', 'Dmitriev')
];
const adminListObservable: Observable<Array<AdminModel>> = of(adminList);

@Injectable({
  providedIn: 'any'
})
export class AdminArrayService {
  admin$: Observable<AdminModel[]> = adminListObservable;
  getAdmin(id: NonNullable<AdminModel['id']> | string): Observable<AdminModel> {
    return this.admin$
      .pipe(

        switchMap((admin: Array<AdminModel>) => {
          const user = admin.find(user => user.id === +id);
          return user ? of(user) : EMPTY;
        }),
        catchError(err => throwError(() => 'Error in getAdmin method')));
  }
  createAdmin(admin: AdminModel): void {
    adminList.push(admin);
  }
  updateAdmin(user: AdminModel): void {
    const i = adminList.findIndex(u => u.id === user.id);
    if (i > -1) {
      adminList.splice(i, 1, user);
    }
  }
}
