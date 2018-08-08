import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../common/user/model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  @Input() user:User;

  @Output() pay:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  getUserImage(){
    return "data:image/png;base64," + this.user.base64Photo;
  }

  getPayments(){
    this.pay.emit(this.user.profileId);
  }

}
