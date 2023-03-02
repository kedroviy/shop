import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CartList } from 'src/app/cart/models/cart.models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Observable<CartList[]>, searchValue: string, isAsc: boolean) {
    const sortOrder = isAsc ? 1 : -1;

    if (!searchValue) {
      return arr;
    }

    arr.pipe(
      map((a: any, b: any) => {
      if (a[searchValue] < b[searchValue]) {
        return sortOrder;
      } else if (a[searchValue] > b[searchValue]) {
        return -sortOrder;
      } else {
        return 0;
      }
    }));
    return arr;
  }
}
