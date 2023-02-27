import { NgModule } from '@angular/core';
import { DashbordRoutingModule } from '../routes/dashboard.routing';
import { UserComponent } from '../pages/admin/user/user.component';
import { IndexComponent } from '../pages/admin/index/index.component';


@NgModule({
  imports : [DashbordRoutingModule],
  declarations : [UserComponent,IndexComponent]
})
export class AdminLayoutModule {

}
