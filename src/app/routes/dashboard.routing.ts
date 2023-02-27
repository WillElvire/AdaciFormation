import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { IndexComponent } from '../pages/admin/index/index.component';
import { UserComponent } from '../pages/admin/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordRoutingModule {}
