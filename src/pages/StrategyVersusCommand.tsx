import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { useState } from "react";

interface Command {
  execute(): void;
}

class Command1 implements Command {
  execute() {
    console.log("Command 1 executed");
  }
}

class Command2 implements Command {
  execute() {
    console.log("Command 2 executed");
  }
}

class Command3 implements Command {
  execute() {
    console.log("Command 3 executed");
  }
}

class CommandController {
  private _commandHistory: Command[] = [];
  private _command: Command | null = null;

  get commandHistoryList() {
    return [...this._commandHistory];
  }

  get currentCommand() {
    return this._command;
  }

  constructor() {
    makeObservable<this, "_command" | "_commandHistory">(this, {
      _command: observable,
      currentCommand: computed,
      setCommand: action.bound,
      executeCommand: action.bound,

      _commandHistory: observable,
      commandHistoryList: computed,
      undo: action.bound,
    });
  }

  setCommand(command: Command) {
    this._command = command;
  }

  executeCommand() {
    if (this._command) {
      this._command.execute();
      this._commandHistory.push(this._command);
    }
  }

  undo() {
    this._command = this._commandHistory.pop() || null;
  }
}

type CommandName = "Command1" | "Command2" | "Command3";

const commandMap: { [key: string]: { new (): Command } } = {
  Command1,
  Command2,
  Command3,
};

const CommandModule = observer(() => {
  const [commandController] = useState(new CommandController());

  return (
    <>
      <section style={{ display: "flex" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const SelectedCommand = formData.get(
              "commandSelector"
            ) as CommandName;
            const CommandClass = commandMap[SelectedCommand];

            if (SelectedCommand) {
              commandController.setCommand(new CommandClass());
            }
          }}
        >
          <select name="commandSelector">
            <option value="Command1">Command 1</option>
            <option value="Command2">Command 2</option>
            <option value="Command3">Command 3</option>
          </select>
          <button type="submit">커맨드 추가</button>
        </form>
        <button
          onClick={() => {
            commandController.executeCommand();
          }}
        >
          커맨드 실행
        </button>
        <button
          onClick={() => {
            commandController.undo();
          }}
        >
          실행 취소
        </button>
      </section>
      <ul
        style={{
          listStyle: "numeric",
        }}
      >
        <h2>등록된 커맨드</h2>
        <div>{JSON.stringify(commandController.currentCommand)}</div>
        <h2>커맨드 기록 ({commandController.commandHistoryList.length}개)</h2>
        {commandController.commandHistoryList.map((command, index) => (
          <li key={index}>{JSON.stringify(command.constructor.name)}</li>
        ))}
      </ul>
    </>
  );
});

interface Flyable {
  fly: () => void;
}

class FlyWithWings implements Flyable {
  fly() {
    console.log("Fly with wings");
  }
}

class FlyWithRocket implements Flyable {
  fly() {
    console.log("Fly with rocket");
  }
}

class FlyWithJet implements Flyable {
  fly() {
    console.log("Fly with jet");
  }
}

class FlyNoWay implements Flyable {
  fly() {
    console.log("Can't fly");
  }
}

class Duck {
  private _flyStrategy: Flyable;

  get flyStrategy() {
    return this._flyStrategy;
  }

  constructor(flyStrategy: Flyable) {
    this._flyStrategy = flyStrategy;

    makeObservable<this, "_flyStrategy">(this, {
      _flyStrategy: observable,
      flyStrategy: computed,
      setFlyStrategy: action.bound,
      fly: action.bound,
    });
  }

  setFlyStrategy(flyStrategy: Flyable) {
    this._flyStrategy = flyStrategy;
  }

  fly() {
    this._flyStrategy.fly();
  }
}

class StrategyService {
  private _duck: Duck = new Duck(new FlyWithWings());

  get duck() {
    return this._duck;
  }

  setFlyStrategy(flyStrategy: Flyable) {
    this._duck.setFlyStrategy(flyStrategy);
  }
}

const StrategyModule = observer(() => {
  const [strategyService] = useState(new StrategyService());

  return (
    <section>
      <h2>전략 패턴</h2>
      <div>
        {Object.getPrototypeOf(strategyService.duck).constructor.name} 객체 -
        flyStrategy:{" "}
        {JSON.stringify(
          Object.getPrototypeOf(strategyService.duck.flyStrategy).constructor
            .name
        )}
      </div>

      <button
        onClick={() => {
          strategyService.setFlyStrategy(new FlyWithWings());
        }}
      >
        날개로 날기
      </button>
      <button
        onClick={() => {
          strategyService.setFlyStrategy(new FlyWithRocket());
        }}
      >
        로켓으로 날기
      </button>
      <button
        onClick={() => {
          strategyService.setFlyStrategy(new FlyWithJet());
        }}
      >
        제트기로 날기
      </button>
      <button
        onClick={() => {
          strategyService.setFlyStrategy(new FlyNoWay());
        }}
      >
        날 수 없음
      </button>
      <button
        onClick={() => {
          strategyService.duck.fly();
        }}
      >
        날기
      </button>
    </section>
  );
});

export const StrategyVersusCommand = () => {
  return (
    <>
      <CommandModule />
      <StrategyModule />
    </>
  );
};
