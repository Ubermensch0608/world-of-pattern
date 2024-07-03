interface Command {
  do(): void;
  undo(): void;
}

export class VisibleCommand implements Command {
  do(): void {
    console.log("필기 내용이 보입니다.");
  }
  undo(): void {
    console.log("필기 내용이 보이지 않습니다.");
  }
}

export class PenWriteCommand implements Command {
  do(): void {
    console.log("펜으로 필기합니다.");
  }
  undo(): void {
    console.log("펜으로 필기를 지웁니다.");
  }
}

export class HighlighterCommand implements Command {
  do(): void {
    console.log("형광펜으로 필기합니다.");
  }
  undo(): void {
    console.log("형광펜으로 필기를 지웁니다.");
  }
}

export class EraseCommand implements Command {
  do(): void {
    console.log("지우개로 필기를 지웁니다.");
  }
  undo(): void {
    console.log("지우개로 필기를 되돌립니다.");
  }
}

export class EraseAllCommand implements Command {
  do(): void {
    console.log("모든 필기를 지웁니다.");
  }
  undo(): void {
    console.log("모든 필기를 되돌립니다.");
  }
}

type CommandNames =
  | "VisibleCommand"
  | "PenWriteCommand"
  | "HighlighterCommand"
  | "EraseCommand"
  | "EraseAllCommand";

class HandwrittenInvoker {
  private commands: Partial<Record<CommandNames, Command>> = {};

  registerCommands(...commands: Command[]): void {
    for (const command of commands) {
      this.commands[command.constructor.name as CommandNames] = command;
    }
  }

  do(commandName: keyof typeof this.commands): void {
    this.commands[commandName]?.do();
  }

  undo(commandName: keyof typeof this.commands): void {
    this.commands[commandName]?.undo();
  }
}

export class HandwrittenNoteService {
  private handwrittenCommandInvoker = new HandwrittenInvoker();

  constructor() {
    this.handwrittenCommandInvoker.registerCommands(
      new VisibleCommand(),
      new PenWriteCommand(),
      new HighlighterCommand(),
      new EraseCommand(),
      new EraseAllCommand()
    );
  }

  do(
    commandName: keyof (typeof HandwrittenInvoker.prototype)["commands"]
  ): void {
    this.handwrittenCommandInvoker.do(commandName);
  }

  undo(
    commandName: keyof (typeof HandwrittenInvoker.prototype)["commands"]
  ): void {
    this.handwrittenCommandInvoker.undo(commandName);
  }
}
