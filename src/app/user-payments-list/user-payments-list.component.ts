import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Card, PaymentMethod} from '../common/payment/model';
import {PaymentService} from '../common/payment/payment.service';

@Component({
  selector: 'user-payments-list',
  templateUrl: './user-payments-list.component.html',
  styleUrls: ['./user-payments-list.component.sass']
})
export class UserPaymentsListComponent implements OnInit, OnChanges{

  @Input()
  aliases:Card[] = [];

  @Input()
  profileId: string;

  paymentMethod:PaymentMethod = new PaymentMethod();

  public showImage: boolean = true;

  constructor(private paymentService:PaymentService) {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.aliases.length==0){
      this.paymentMethod = new PaymentMethod();
    }
  }

  makePayment(){
    if(this.paymentMethod.pin&&this.paymentMethod.amount){
      this.paymentService.pay(this.paymentMethod, this.profileId)
        .subscribe(
          ()=>{
            console.log("ok");
            this.paymentMethod = new PaymentMethod();
            this.toggleImage();
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

  toggleImage(){
    this.showImage = !this.showImage;
  }

  getBrandImage(mask: string){
    switch (mask.charAt(0)){
      case "5": return "../../assets/img/if__Mastercard_1156750.png";
      case "4": return "../../assets/img/if_visa_294654.png";
    }
  }

}
