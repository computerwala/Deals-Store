import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { DealsComponent } from './admin/deals/deals.component';
import { AdddealComponent } from './admin/deals/adddeal/adddeal.component';
import { ViewdealComponent } from './admin/deals/viewdeal/viewdeal.component';
import { ShopdealComponent } from './shopdeal/shopdeal.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    DealsComponent,
    AdddealComponent,
    ViewdealComponent,
    ShopdealComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],

  providers: [
{
  provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true 
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
