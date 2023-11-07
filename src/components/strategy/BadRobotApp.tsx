import { useState } from "react";
import "./RobotApp.css";
import {
  Robot,
  JapaneseRunningRobot,
  JapaneseWalkingRobot,
  KoreanRunningRobot,
  KoreanWalkingRobot,
} from "../../modules/strategy/bad/Robot";

export const BadRobotApp = () => {
  const [robot, setRobot] = useState<Robot | null>(null);

  const changeRobot = (
    moveType: "walking" | "running",
    language: "korean" | "japanese"
  ) => {
    if (moveType === "running") {
      if (language === "korean") setRobot(new KoreanRunningRobot());
      else setRobot(new JapaneseRunningRobot());
    } else if (moveType === "walking") {
      if (language === "korean") setRobot(new KoreanWalkingRobot());
      else setRobot(new JapaneseWalkingRobot());
    }
  };

  return (
    <section>
      <h3>클린하지 않은 문제의 코드</h3>
      <div className="robot__actions">
        <button onClick={() => changeRobot("walking", "japanese")}>
          일본어하면서, 걷는 로봇 전환
        </button>
        <button onClick={() => changeRobot("running", "japanese")}>
          일본어하면서, 뛰는 로봇 전환
        </button>
        <button onClick={() => changeRobot("walking", "korean")}>
          한국어 하면서, 걷는 로봇 전환
        </button>
        <button onClick={() => changeRobot("running", "korean")}>
          한국어 하면서, 뛰는 로봇 전환
        </button>
      </div>
      <RobotStatus robot={robot} />
      <p>
        보기에는 객체 지향적인 코드처럼 보이지만, 실제로는 객체 지향적이지 않다.
        만약 고객으로부터 <strong>로봇의 기능 추가</strong>를 요청받는다면
        코드의 확장 면에서 문제가 발생한다.
      </p>
      <p>
        예를 들어, 로봇에 번역 기능을 추가한다고 가정해보자. 번역 기능을
        추가하기 위해서는 translate()라는 메서드를 걷는 로봇과 뛰는 로봇에
        추가해야 한다.
      </p>
      <p>
        기존 기능을 가진 상태의 걷는 로봇과 뛰는 로봇 그리고 번역 기능을 가진
        걷는 로봇과 뛰는 로봇을 만들면 총 4개의 로봇이 생긴다.
      </p>
      <p>
        이렇게 되면 기능이 추가될 때마다 로봇의 종류^동작의 개수만큼의 클래스가
        생기게 된다.
      </p>
      <p>
        그뿐만 아니라, 메서드 스펙이 변경되면 모든 로봇의 메서드를 수정해야
        한다.
      </p>
      ---
      <p>
        위처럼 클래스가 기하급수적으로 늘어나고, 메서드 스펙이 변경되면 모든
        로봇의 메서드를 수정해야 하는 문제의 발생 원인은 객체를 사물 / 생물
        정도로 밖에 구분하지 못하기 때문이다. 객체를 생성할 때, 로봇의 종류와
        동작을 분리하여 객체를 생성할 수 있다.
      </p>
      <p>
        객체는 하나의 기능이나 행위, 동작으로 표현할 수 있다. 전략 패턴은 이러한
        접근으로 복잡성을 해결하는 패턴이다.
      </p>
    </section>
  );
};

const RobotStatus = ({ robot }: { robot: Robot | null }) => {
  if (!robot) return <p>로봇이 설정되지 않았습니다.</p>;
  return (
    <div>
      <h4>{robot.display()}</h4>
      <p>{robot.move()}</p>
      <p>{robot.translate()}</p>
    </div>
  );
};
