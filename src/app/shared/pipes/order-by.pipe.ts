import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  @Input() key!: string;


  transform(value: unknown, ...args: unknown[]): unknown {
    return null; // ? я так понимаю, что это лишний файл
  }

}
