import {TypeObject} from '../shared.model';

export class UserImage extends TypeObject {
  public photoId: string;
  public base64Photo: string;

  public constructor(photoId: string,base64Photo: string) {
    super();
    this.photoId = photoId;
    this.base64Photo = base64Photo;
  }
}
