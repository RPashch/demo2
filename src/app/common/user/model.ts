import {TypeObject} from '../shared.model';

export class User extends TypeObject{

  public profileId: string;
  public name:string;
  public base64Photo: string;
  // public image: string;

  public constructor(profileId: string,name:string,base64Photo: string) {
    super();
    this.name=name;
    this.base64Photo=base64Photo;
    this.profileId=profileId;
  }
}
