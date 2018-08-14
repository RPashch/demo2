import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Response } from '@angular/http';
import {UserImage} from './model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable()
export class ImageService{

  private imageApiUrl = `${environment.apiUrl}/photos`;

  constructor(private http: HttpClient){}

  //maybe should expect Page
  getUsersImages(): Promise <UserImage[]> {
    console.log("getUsersImages invokation");
    let params = new HttpParams();
    // params = params.append('merchantId', environment.pointData.merchantId);
    // params = params.append('tradePointId', environment.pointData.tradePointId);
    params = params.append('cameraId', environment.pointData.cameraId);

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return this.http
      .get<UserImage[]>(this.imageApiUrl, { params: params, headers: headers })
      .pipe(map(items => {
        return items;
      }))
      .toPromise();
  }






  /*  getUsersImages(){

    }*/
}
