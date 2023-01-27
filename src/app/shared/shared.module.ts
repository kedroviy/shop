import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstComponent } from './components/custom-components/first/first.component';
import { HighLightDirective } from './directives/high-light.directive';
import { HostClickDirective } from './directives/host-click.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
  declarations: [FirstComponent, HighLightDirective, HostClickDirective, OrderByPipe],
  exports: [
    FirstComponent,
    HighLightDirective,
    HostClickDirective,
    OrderByPipe,
    FormsModule],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
