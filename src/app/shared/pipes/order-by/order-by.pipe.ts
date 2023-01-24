import { Pipe, PipeTransform } from '@angular/core';
import { CartList } from 'src/app/cart/models/cart.models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: CartList[], searchValue: keyof CartList, isAsc: boolean) {
    const sortOrder = isAsc ? 1 : -1;

    if (!searchValue) {
      return arr;
    }

    arr.sort((a: any, b: any) => {
      if (a[searchValue] < b[searchValue]) {
        return -sortOrder;
      } else if (a[searchValue] > b[searchValue]) {
        return sortOrder;
      } else {
        return 0;
      }
    });
    return arr;
  }
}
