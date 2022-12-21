import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';



@NgModule({
  declarations: [
    CartListComponent
  ],
  exports: [CartListComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule { }