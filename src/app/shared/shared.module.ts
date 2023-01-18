import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/custom-components/first/first.component';
import { HighLightDirective } from './directives/high-light.directive';
import { HostClickDirective } from './directives/host-click.directive';



@NgModule({
  declarations: [FirstComponent, HighLightDirective, HostClickDirective],
  exports: [FirstComponent, HighLightDirective, HostClickDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
