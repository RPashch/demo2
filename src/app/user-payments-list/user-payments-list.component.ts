import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaymentMethod} from '../common/payment/model';
import {PaymentService} from '../common/payment/payment.service';

@Component({
  selector: 'user-payments-list',
  templateUrl: './user-payments-list.component.html',
  styleUrls: ['./user-payments-list.component.sass']
})
export class UserPaymentsListComponent implements OnInit {

  @Input()
  aliases:string[] = [];

  @Input()
  profileId: string;

  paymentMethod:PaymentMethod = new PaymentMethod();

  public showImage: boolean = true;

  constructor(private paymentService:PaymentService) {
  }

  ngOnInit() {
  }

  makePayment(){
    if(this.paymentMethod.pin&&this.paymentMethod.amount){
      this.paymentService.pay(this.paymentMethod, this.profileId)
        .subscribe(
          ()=>{
            console.log("ok")
            this.showImage = !this.showImage;
          },
          (response) => {
            console.log(response['errors']);
          }
        )
    }
  }
  setCurrentAlias(alias:string){
    console.log("current alias is", alias);
    this.paymentMethod.cardAlias = alias;
  }



}
