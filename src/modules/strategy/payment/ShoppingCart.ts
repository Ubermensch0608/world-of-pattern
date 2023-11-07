import { Item } from "./Item";
import { PaymentStrategy } from "./PaymentStrategy";

export class ShoppingCart {
  items: Item[];

  constructor() {
    this.items = new Array<Item>();
  }

  get totalPrice(): number {
    return this.items.reduce((prev, cur) => prev + cur.price, 0);
  }

  addItem(newItem: Item) {
    this.items.push(newItem);
  }

  pay(payment: PaymentStrategy) {
    let amount = 0;
    for (const item of this.items) {
      amount += item.price;
    }
    return payment.pay(amount);
  }
}
