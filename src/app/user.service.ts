import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()

export class UsersService { 

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=6&nat=gb')
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
    }

    users = [
        {name: 'WFM 1'},
        {name: 'WFM 2'},
        {name: 'WFM 3'},
        {name: 'WFM 4'},
        {name: 'WFM 5'},
        {name: 'WFM 6'},
    ]
}
