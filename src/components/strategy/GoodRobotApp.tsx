import { useState } from "react";
import {
  Japanese,
  Korean,
  MoveStrategy,
  Robot,
  Run,
  TranslateStrategy,
  Walk,
} from "../../modules/strategy/good/Robot";

export const GoodRobotApp = () => {
  const [moveStrategy, setMoveStrategy] = useState<MoveStrategy>(new Walk());
  const [translateStrategy, setTranslateStrategy] = useState<TranslateStrategy>(
    new Korean()
  );

  const robot = new Robot(moveStrategy, translateStrategy);

  return (
    <section>
      <h3>전략 패턴을 이용해 복잡도 낮추기</h3>

      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <div>
          <h3>동작 인터페이스</h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <button onClick={() => setMoveStrategy(new Walk())}>걷기</button>
            <button onClick={() => setMoveStrategy(new Run())}>달리기</button>
          </div>
        </div>
        <div
          style={{
            width: "1px",
            height: "20px",
            backgroundColor: "black",
            top: "50%",
            transform: "translateY(250%)",
          }}
        />
        <div>
          <h3>언어 인터페이스</h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <button onClick={() => setTranslateStrategy(new Korean())}>
              한국어
            </button>
            <button onClick={() => setTranslateStrategy(new Japanese())}>
              일본어
            </button>
          </div>
        </div>
      </div>
      <RobotStatus robot={robot} />

      <p>
        예를 들어, 로봇 클래스가 있고 서빙하는 동작 메서드가 있다고 가정해보자.
        이 서빙 메서드를 로봇 객체에 국한되게 하는 것이 아니라 따로 행위
        구현체로 빼서 관리하는 것이다.
      </p>
      <p>
        그리고 이 <strong>행위 객체</strong>들을 모아 인터페이스로 묶는 것이
        전략 패턴이다.
        <br />
        이것을 컨텍스트에 합성시켜 다형성을 통해 유기적으로 다양한 동작을 수행할
        수 있게 하는 것이다.
      </p>
      <p>
        이렇게 하면 로봇 클래서는 하나를 유지하면서도 다양한 동작을 수행할 수
        있는 다양한 로봇 객체를 만들 수 있다. 다양한 전략을 스위칭하여 실행할 수
        있게 되는 것이다.
      </p>

      <strong>전략 패턴</strong>
      <ul>
        <li>동작을 범주화</li>
        <li>구현 클래스를 하나로 관리할 수 있음</li>
      </ul>
    </section>
  );
};

const RobotStatus = ({ robot }: { robot: Robot | null }) => {
  if (!robot) return <p>로봇이 설정되지 않았습니다.</p>;
  return (
    <div>
      <p>
        로봇이 {robot.translate()}를 말하면서, {robot.move()}
      </p>
    </div>
  );
};
