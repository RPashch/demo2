import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {User} from '../user/model';
import {PaymentMethod} from './model';
import {Observable} from 'rxjs';
import {Response} from '@angular/http';

@Injectable()
export class PaymentService {

  private paymentsApiUrl = `${environment.apiUrl}/api/payments`;

  constructor(private http: HttpClient) {
  }

  getUserPayments(profileId:string):Promise<string[]>{
    console.log("getUserPayments", profileId);
    let params = new HttpParams();
    params = params.append('profileId', profileId);

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return this.http
      .get<string[]>(this.paymentsApiUrl, { params: params, headers: headers })
      .pipe(map(aliases => {
        return aliases;
      }))
      .toPromise();
  }

  pay(paymentMethod: PaymentMethod, profileId:string){
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    let paymentRequest = {
      pin:paymentMethod.pin,
      amount:paymentMethod.amount,
      cardAlias:paymentMethod.cardAlias,
      profileId:profileId
    };

    return this.http.post(`${this.paymentsApiUrl}/pay`, paymentRequest, {headers: headers});

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
