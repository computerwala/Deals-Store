import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsComponent } from './admin/deals/deals.component';
import { UsersComponent } from './admin/users/users.component';
import { ShopdealComponent } from './shopdeal/shopdeal.component';


const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/deals', component: DealsComponent },
  { path: 'shop', component: ShopdealComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
