import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../common/user/user.service';
import {User} from '../common/user/model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  @Input() users: User[] = [];

  @Output()
  pay:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  getPayments(profileId:string){
    this.pay.emit(profileId);
  }

}
