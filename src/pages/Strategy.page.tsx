import { BadRobotApp } from "../components/strategy/BadRobotApp";
import { GoodRobotApp } from "../components/strategy/GoodRobotApp";
import { Payment } from "../components/strategy/Payment";

const StrategyPage = () => {
  return (
    <main>
      <h2>여러 기능 전략을 가진 로봇</h2>
      <BadRobotApp />
      <GoodRobotApp />
      <Payment />
    </main>
  );
};
export default StrategyPage;
