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
