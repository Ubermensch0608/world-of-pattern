// 전략 - 추상화된 알고리즘
export interface PaymentStrategy {
  pay(amount: number): string;
}

export class KAKAOCardStrategy implements PaymentStrategy {
  constructor(
    private name: string,
    private cardNumber: string,
    private cvc: string,
    private dateOfExpiry: string
  ) {}

  pay(amount: number): string {
    return amount.toLocaleString() + "원을 카카오 카드로 결제했습니다.";
  }
}

export class LUNACardStrategy implements PaymentStrategy {
  constructor(private emailId: string, private password: string) {}

  pay(amount: number): string {
    return amount.toLocaleString() + "원을 루나 카드로 결제했습니다.";
  }
}
