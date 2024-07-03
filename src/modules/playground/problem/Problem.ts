interface Problem {
  id: 598973;
  conceptId: 6872;
  groupCode: 1130;
  topicId: 6294;
  subTopicId: 30250;
  groupCase: "SUB_TOPIC";
  type: "SINGLE_CHOICE";
  optionCount: 5;
  level: 1;
  levelOfConceptChip: "A";
  problemImageUrl: "https://freewheelin-contents-dev.s3.ap-northeast-2.amazonaws.com/problem/598973/4f589e6e/problem.png";
  answerImageUrl: "https://freewheelin-contents-dev.s3.ap-northeast-2.amazonaws.com/problem/598973/4f589e6e/answer.png";
  solutionImageUrl: "https://freewheelin-contents-dev.s3.ap-northeast-2.amazonaws.com/problem/598973/4f589e6e/solution.png";
  answer: "4";
  answerUnits: [];
  autoScoredType: "POSSIBLE_PLUS";
  autoScored: true;
  keypadTypes: ["DECIMAL"];
  hidden: false;
  trendy: false;
  problemSummary: {
    problemId: 598973;
    totalUsed: 3379;
    correctTimes: 2806;
    wrongTimes: 573;
    answerRate: 83;
  };
  index: 1;
  favorite: false;
  conceptName: null;
  tagTop: null;
  problemImage: "https://freewheelin-contents-dev.s3.ap-northeast-2.amazonaws.com/problem/598973/4f589e6e/problem.png";
  answerImage: "https://freewheelin-contents-dev.s3.ap-northeast-2.amazonaws.com/problem/598973/4f589e6e/answer.png";
  explanationImage: "https://freewheelin-contents-dev.s3.ap-northeast-2.amazonaws.com/problem/598973/4f589e6e/solution.png";
  answerUnit: [];
  answerRate: 83;
}

// Worksheet
class WorksheetProblem {
  worksheetProblemId: number;
  result: "CORRECT" | "WRONG" | "NONE" | "UNKNOWN";
  userAnswer: string;

  get problem(): Problem {
    return this._problem;
  }

  constructor(
    private _problem: Problem,
    {
      worksheetProblemId,
      result,
      userAnswer,
    }: {
      worksheetProblemId: number;
      result: "CORRECT" | "WRONG" | "NONE" | "UNKNOWN";
      userAnswer: string;
    }
  ) {
    this.worksheetProblemId = worksheetProblemId;
    this.result = result;
    this.userAnswer = userAnswer;
  }
}

// Workbook
abstract class WorkbookProblem {}
