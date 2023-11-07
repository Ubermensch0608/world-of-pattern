export abstract class Robot {
  abstract display(): string;
  abstract move(): string;
  abstract translate(): string;
}

export class JapaneseWalkingRobot extends Robot {
  display(): string {
    return "걷는 로봇";
  }
  move(): string {
    return "로봇이 걸어서 이동합니다.";
  }
  translate(): string {
    return "로봇이 일본어를 말합니다.";
  }
}

export class KoreanRunningRobot extends Robot {
  display(): string {
    return "뛰는 로봇";
  }
  move(): string {
    return "로봇이 뛰어서 이동합니다.";
  }
  translate(): string {
    return "로봇이 한국어를 말합니다.";
  }
}

export class JapaneseRunningRobot extends Robot {
  display(): string {
    return "뛰는 로봇";
  }
  move(): string {
    return "로봇이 뛰어서 이동합니다.";
  }
  translate(): string {
    return "로봇이 일본어를 말합니다.";
  }
}

export class KoreanWalkingRobot extends Robot {
  display(): string {
    return "걷는 로봇";
  }
  move(): string {
    return "로봇이 걸어서 이동합니다.";
  }
  translate(): string {
    return "로봇이 한국어를 말합니다.";
  }
}
