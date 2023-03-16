import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FirstComponent } from './components/custom-components/first/first.component';
import { HighLightDirective } from './directives/high-light.directive';
import { HostClickDirective } from './directives/host-click.directive';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { OnlyNumberDirective } from './directives/check-only-numbers';

@NgModule({
  declarations: [
    FirstComponent,
    OnlyNumberDirective,
    HighLightDirective,
    HostClickDirective,
    OrderByPipe,
    LoginDialogComponent,
  ],
  exports: [
    FirstComponent,
    HighLightDirective,
    HostClickDirective,
    OnlyNumberDirective,
    OrderByPipe,
    FormsModule,
    LoginDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
