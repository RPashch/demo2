import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserInfoComponent,
    UserPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
