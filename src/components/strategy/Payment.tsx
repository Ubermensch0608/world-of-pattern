import { nanoid } from "nanoid";
import { Item } from "../../modules/strategy/payment/Item";
import "./Payment.css";
import { useEffect, useState } from "react";
import { ShoppingCart } from "../../modules/strategy/payment/ShoppingCart";
import {
  KAKAOCardStrategy,
  LUNACardStrategy,
  PaymentStrategy,
} from "../../modules/strategy/payment/PaymentStrategy";

const SHOPPING_LIST: Item[] = [
  {
    name: "커피",
    price: 1800,
  },
  {
    name: "콜라",
    price: 1200,
  },
  {
    name: "우유",
    price: 1500,
  },
  {
    name: "커피우유",
    price: 1900,
  },
];

export const Payment = () => {
  const [cart, setCart] = useState<ShoppingCart>();
  const [paymentStrategy, setPaymentStrategy] = useState<PaymentStrategy>();
  const [message, setMessage] = useState("");

  const addToCart = (item: Item) => {
    const newCart = new ShoppingCart();
    if (cart?.items) {
      newCart.items = cart.items;
    }
    newCart.addItem(item);

    setCart(newCart);
  };

  const changePaymentStrategy = (paymentStrategy: "kakao" | "luna") => {
    if (paymentStrategy === "kakao") {
      setPaymentStrategy(
        new KAKAOCardStrategy("1234-1234-1234-1234", "123", "123", "2028-12-31")
      );
    } else if (paymentStrategy === "luna") {
      setPaymentStrategy(
        new LUNACardStrategy("melancholyee28@google.com", "2913")
      );
    }
  };
  const payInShoppingCart = () => {
    if (paymentStrategy) {
      setMessage(cart?.pay(paymentStrategy) || "");
    } else {
      alert("결제 수단을 선택해주세요.");
    }
  };

  useEffect(() => {
    setCart(new ShoppingCart());
  }, []);

  return (
    <article>
      <h2>결제 시스템</h2>
      <hr />
      <section className="payment__shoppingCart">
        <div>
          <h3>장바구니</h3>
          <ul>
            {cart?.items.length === 0 && <p>장바구니가 비었습니다.</p>}
            {cart?.items.map((item) => (
              <li key={nanoid()}>
                {item.name} {item.price.toLocaleString()}원
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>결제</h3>
          <label>
            <input
              type="radio"
              name="payment"
              value="credit"
              onChange={() => changePaymentStrategy("kakao")}
            />
            KAKAO 카드
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="credit"
              onChange={() => changePaymentStrategy("luna")}
            />
            LUNA 카드
          </label>
          <div className="cart__actions">
            <p>총 가격: {cart?.totalPrice.toLocaleString()}원</p>
            <button onClick={payInShoppingCart}>결제하기</button>
          </div>
          <div>
            <p>{message}</p>
          </div>
        </div>
      </section>

      <hr />
      <h3>상품 목록</h3>
      <ul>
        {SHOPPING_LIST.map((item) => (
          <li key={nanoid()} className="payment__shopping-item">
            <h4>{item.name}</h4>
            <p>{item.price.toLocaleString()}원</p>
            <button
              className="shopping__item-button"
              onClick={() => addToCart(item)}
            >
              장바구니에 담기
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
