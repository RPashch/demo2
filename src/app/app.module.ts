import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserImageListComponent } from './user-image-list/user-image-list.component';
import { UserImageComponent } from './user-image/user-image.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPaymentsListComponent } from './user-payments-list/user-payments-list.component';
import {FormsModule} from '@angular/forms';
import {ImageService} from './common/image/image.service';
import {PaymentService} from './common/payment/payment.service';
import {UserService} from './common/user/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserInfoComponent,
    UserPaymentComponent,
    UserImageListComponent,
    UserImageComponent,
    UsersListComponent,
    UserPaymentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ToasterModule
  ],
  providers: [
    UserService,
    ImageService,
    PaymentService,
    HttpClient],
  exports:[
    ToasterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
