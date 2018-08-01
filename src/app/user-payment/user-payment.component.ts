import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.sass']
})
export class UserPaymentComponent implements OnInit {

  public showImage: boolean = true;
  toggleImage() {
    this.showImage = !this.showImage
  }
  constructor() { }

  ngOnInit() {
  }

}
