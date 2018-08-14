import {TypeObject} from '../shared.model';

export class PaymentMethod extends TypeObject {

  public pin:string;
  public amount: number;
  public cardAlias: string;

  public constructor(){//pin:string, amount: number, cardAlias: string) {
    super();
/*    this.pin = pin;
    this.amount = amount;
    this.cardAlias = cardAlias;*/
  }
}

export class Card extends TypeObject{
  public alias:string;
  public corporate:boolean;
  public expired:boolean;
  public mask:string;
  public uid:string;

  public constructor(alias:string,
                     corporate:boolean,
                     expired:boolean,
                     mask:string,
                     uid:string){
    super();
    this.alias = alias;
    this.corporate = corporate;
    this.expired = expired;
    this.mask = mask;
    this.uid = uid;
  }
}
