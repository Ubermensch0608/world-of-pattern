import { BadRobotApp } from "../components/strategy/BadRobotApp";
import { GoodRobotApp } from "../components/strategy/GoodRobotApp";
import { Payment } from "../components/strategy/Payment";
import { SortApp, SortApp2 } from "../components/strategy/sort/SortApp";

const StrategyPage = () => {
  return (
    <main>
      <h2>여러 기능 전략을 가진 로봇</h2>
      <BadRobotApp />
      <GoodRobotApp />
      <Payment />

      <div>
        <SortApp />
        <SortApp2 />
      </div>
    </main>
  );
};
export default StrategyPage;
