import { Component } from '@angular/core';
import { UserService } from './common/user/user.service';
import {User} from './common/user/model';
import {ImageService} from './common/image/image.service';
import {PaymentService} from './common/payment/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  users:User[] = [];
  aliases:string[] = [];
  profileId:string;
  constructor(private userService: UserService, private paymentService: PaymentService) {}

  ngOnInit() {
  }

  getUsers(photoId:string){
    this.userService.getUsersByPhotoId(photoId).then(users=>{
      this.users = users;
    })
  }

  getAliases(profileId:string){
    this.profileId = profileId;
    return this.paymentService.getUserPayments(profileId).then(payments =>{
      this.aliases = payments;
    });
  }
}
