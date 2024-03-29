import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

import { AdminComponent } from './admin.component';
import { AdminProductsListComponent } from './components';
import { AdminResolveGuard } from './guards';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { AdminFormComponent } from './components/admin-form/admin-form.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivateChild: [AuthGuard],
  children: [
    {
      path: '',
      children: [
        { path: 'manage-products', component: AdminProductsListComponent },
        { path: 'product/add', component: AdminAddProductComponent},
        {
          path: 'edit/:adminID',
          component: AdminFormComponent,
          canDeactivate: [CanDeactivateGuard],
          resolve: {
            user: AdminResolveGuard
          }
        },
        { path: '', component: AdminDashboardComponent },
      ]
    }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { static components = [AdminComponent, AdminProductsListComponent, AdminDashboardComponent, AdminAddProductComponent]; }
