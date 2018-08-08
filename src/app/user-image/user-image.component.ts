import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserImage} from '../common/image/model';

@Component({
  selector: 'user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.sass']
})
export class UserImageComponent implements OnInit {

  @Output()
  getUsers: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  image:UserImage;

  constructor() { }

  ngOnInit() {
  }

  getImage(){
    console.log("getImage");
    return "data:image/png;base64," + this.image.base64Photo;
  }

  retrieveUsersByPhotoId(){
    this.getUsers.emit(this.image.photoId);
  }
}
