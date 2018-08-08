import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImageService} from '../common/image/image.service';
import {UserImage} from '../common/image/model';

@Component({
  selector: 'user-image-list',
  templateUrl: './user-image-list.component.html',
  styleUrls: ['./user-image-list.component.sass']
})
export class UserImageListComponent implements OnInit {

  @Output()
  users: EventEmitter<string> = new EventEmitter<string>();

  private images:UserImage[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImagesList();
  }

  getImagesList(){
    console.log("getImagesList");
    this.imageService.getUsersImages().then(images=>{
      this.images = images;
    })
  }

  getUsers(photoId:string){
    this.users.emit(photoId);
  }
}
