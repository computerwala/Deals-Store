import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DealsComponent } from './admin/deals/deals.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ShopdealComponent } from './shopdeal/shopdeal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/users', component: UsersComponent, canActivate:[AuthGaurdService] },
  { path: 'admin/deals', component: DealsComponent, canActivate:[AuthGaurdService] },
  { path: 'shop', component: ShopdealComponent ,canActivate:[AuthGaurdService] },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent , canActivate:[AuthGaurdService] }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
