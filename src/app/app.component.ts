import { Component } from '@angular/core';
import { UserService } from './common/user/user.service';
import {User} from './common/user/model';
import {ImageService} from './common/image/image.service';
import {PaymentService} from './common/payment/payment.service';
import {Card} from './common/payment/model';
import {ToasterConfig, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  users:User[] = [];
  aliases:Card[] = [];
  profileId:string;

  toasterconfig: ToasterConfig = new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: false,
    positionClass: 'toast-bottom-right'
  });

  constructor(private userService: UserService, private paymentService: PaymentService, private toaster: ToasterService) {}

  ngOnInit() {
  }

  getUsers(photoId:string){
    this.userService.getUsersByPhotoId(photoId).then(users=>{
      this.users = users["profiles"];
      this.aliases = [];
    })
      .catch(error => {
        this.users=[];
        this.aliases = [];
        this.toaster.pop('error', 'Помилка',
          `Не знайшлось жодної людини по цьому зображенні, скористайтесь іншим`)
      });
  }

  getAliases(profileId:string){
    this.profileId = profileId;
    return this.paymentService.getUserPayments(profileId).then(payments =>{
      this.aliases = payments["cards"];
      console.log(this.aliases);
    })
      .catch(error => {
        this.aliases=[];
        this.toaster.pop('error', 'Помилка',
          `У клієнта нема даних по карткам`)
      });
  }
}
