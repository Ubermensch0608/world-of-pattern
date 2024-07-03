export class Draw {
  constructor(
    protected canvas: HTMLCanvasElement,
    protected fillColor = "#ffffff",
    protected strokeColor = "#000000"
  ) {}

  setFillColor(fillColor: string): Draw {
    this.fillColor = fillColor;
    return this;
  }

  setStrokeColor(strokeColor: string): Draw {
    this.strokeColor = strokeColor;
    return this;
  }
}
