import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/custom-components/first/first.component';
import { HighLightDirective } from './directives/high-light.directive';



@NgModule({
  declarations: [FirstComponent, HighLightDirective],
  exports: [FirstComponent, HighLightDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
