import { Command } from "./Command";
import { Draw } from "./Draw";

export class TextCommand extends Draw implements Command {
  constructor(
    canvas: HTMLCanvasElement,
    private x: number,
    private y: number,
    private size: number,
    private text: string
  ) {
    super(canvas);
  }

  run(): void {
    const context = this.canvas.getContext("2d");
    if (context) {
      context.font = `${this.size}px Arial`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      context.fillStyle = this.fillColor;
      context.strokeStyle = this.strokeColor;

      context.fillText(this.text, this.x, this.y);
      context.strokeText(this.text, this.x, this.y);
    }
  }
  undo(): void {
    throw new Error("Method not implemented.");
  }
}
