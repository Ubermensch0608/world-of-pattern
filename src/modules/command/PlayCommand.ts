import { action, computed, makeObservable, observable } from "mobx";
import { Command } from "./Command";
import { Draw } from "./Draw";

export class PlayCommand extends Draw implements Command {
  private _commands = new Array<Command>();
  private _playIndex = 0;

  get commands() {
    return this._commands;
  }

  get playIndex() {
    return this._playIndex;
  }

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    makeObservable<this, "_commands" | "_playIndex">(this, {
      _commands: observable,
      _playIndex: observable,

      commands: computed,
      playIndex: computed,

      run: action.bound,
      undo: action.bound,
      addCommand: action.bound,
      setFillColor: action.bound,
      setStrokeColor: action.bound,
    });
  }

  run(): void {
    if (this._playIndex < this._commands.length) {
      const commands = this._commands[this._playIndex];
      commands.run();

      this._playIndex++;

      this.run();
    } else {
      this._playIndex = 0;
    }
  }
  undo(): void {
    throw new Error("Method not implemented.");
  }

  addCommand(command: Command) {
    this._commands.push(command);
  }
}
