import { Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserImage} from '../image/model';
import {User} from './model';

@Injectable()
export class UserService {

  private userApiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) {}

    /*getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=name,picture&results=6')
            .pipe(map(response => response.json()))
            .pipe(map(response => response.results))
            .pipe(map(users => {
		    return users.map(u => {
		 		return {
                    name: (u.name.first + ' ' + u.name.last),
                    image: u.picture.large
		 		}
		 	})
		}))
    }*/

    getUsersByPhotoId(photoId:string){
      console.log("getUsers invokation by photoId", photoId);
      let params = new HttpParams();
      params = params.append('photoId', photoId);

      let headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');

      return this.http
        .get<User[]>(this.userApiUrl, { params: params, headers: headers })
        .pipe(map(items => {
          return items;
        }))
        .toPromise();
    }


}

