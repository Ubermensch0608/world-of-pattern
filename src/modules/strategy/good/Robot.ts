export class Robot {
  private _moveStrategy: MoveStrategy;
  private _translateStrategy: TranslateStrategy;

  get moveStrategy(): MoveStrategy {
    return this._moveStrategy;
  }

  get translateStrategy(): TranslateStrategy {
    return this._translateStrategy;
  }

  constructor(
    moveStrategy: MoveStrategy,
    translateStrategy: TranslateStrategy
  ) {
    this._moveStrategy = moveStrategy;
    this._translateStrategy = translateStrategy;
  }

  public move(): string {
    return this._moveStrategy.move();
  }

  public translate(): string {
    return this._translateStrategy.translate();
  }
}

export interface TranslateStrategy {
  translate(): string;
}

export class Korean implements TranslateStrategy {
  public translate(): string {
    return "한국어";
  }
}

export class Japanese implements TranslateStrategy {
  public translate(): string {
    return "일본어";
  }
}

export interface MoveStrategy {
  move(): string;
}

export class Run implements MoveStrategy {
  move(): string {
    return "달립니다.";
  }
}

export class Walk implements MoveStrategy {
  move(): string {
    return "걷습니다.";
  }
}
