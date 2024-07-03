interface IWorksheet {
  id: number;
  type: "CUSTOM" | "WRONG_LEARNING" | "LEVEL_UP_LEARNING" | "EXAM";
  school: "ELEMENTARY" | "MIDDLE" | "HIGH";
  grade: "1" | "2" | "3" | "4" | "5" | "6";
  title: string;
  titleTag: string;
  chapter: string;
  tag: "BASIC" | "LEVEL_UP_LEARNING" | "WRONG_LEARNING";
  problemCount: number;
  level: 1 | 2 | 3 | 4 | 5;
  autoScorable: boolean;
  accessModifierToStudent: "PUBLIC" | "PRIVATE";
}

interface IWorkbook {
  id: number;
  type: "CUSTOM";
  level: 3;
  page: number;
  schoolType: "MIDDLE";
  grade: "1" | "2" | "3" | "4" | "5" | "6";
  semester: 1 | 2;
  headtitle: string;
  title: string;
  subtitle: string;
  fulltitle: string;
  edition: string;
  publisher: string;
  assignmentFlag: boolean;
  autoScored: boolean;
  pdfUrl: string;
  answerPdfUrl: string | null;
  minPage: number;
  maxPage: number;
  answerPage: number;
  coverType: number;
  partitionType: number;
  conceptFlag: boolean;
  createDatetime: string;
  curriculumConceptType: "LITTLE_CHAPTER" | "CHAPTER" | "BIG_CHAPTER";
  academyId: string;
  teacherId: string;
  defaultPdfUrl: string;
  defaultAnswerPdfUrl: string;
  pairX: string | null;
  studentWorkbook: {
    id: number;
    workbookId: number;
    studentId: string;
  };
  roundToRevisionRoundMap: {
    [key: string]: {
      id: number;
      studentWorkbookId: number;
      round: number;
      createDatetime: string;
      lastUseDatetime: string;
      recentProgressId: number;
      recentPageNumber: number;
      percent: number;
    };
  };
  recentRevisionId: number;
  recentRevisionRound: number;
  recentPageNumber: number;
  progress: number;
  recentAssignedDatetime: number;
}

interface ContentsStrategy {
  assign(): void;
}

class WorksheetStrategy implements ContentsStrategy {
  assign(): void {
    throw new Error("Method not implemented.");
  }
}
class WorkbookStrategy implements ContentsStrategy {
  assign(): void {
    throw new Error("Method not implemented.");
  }
}

interface ScoringStrategy {
  scoring(): void;
}

class AutoScoringStrategy implements ScoringStrategy {
  scoring(): void {
    throw new Error("Method not implemented.");
  }
}
class ManualScoringStrategy implements ScoringStrategy {
  scoring(): void {
    throw new Error("Method not implemented.");
  }
}

export class LearningContents {
  private _contentsStrategy: ContentsStrategy;
  private _scoringStrategy: ScoringStrategy;

  get contentsStrategy() {
    return this._contentsStrategy;
  }

  get scoringStrategy() {
    return this._scoringStrategy;
  }

  constructor(
    contentsStrategy: ContentsStrategy,
    scoringStrategy: ScoringStrategy
  ) {
    this._contentsStrategy = contentsStrategy;
    this._scoringStrategy = scoringStrategy;
  }
}

export class Worksheet extends LearningContents {
  get worksheet() {
    return this._worksheet;
  }

  constructor(
    private _worksheet: IWorksheet,
    scoringStrategy: ScoringStrategy
  ) {
    super(new WorksheetStrategy(), scoringStrategy);
  }
}

const worksheet1 = new Worksheet(
  {
    id: 1,
    type: "CUSTOM",
    school: "ELEMENTARY",
    grade: "1",
    title: "1학년 1학기 기말고사",
    titleTag: "기말고사",
    chapter: "1학기 전체",
    tag: "BASIC",
    problemCount: 30,
    level: 1,
    autoScorable: true,
    accessModifierToStudent: "PUBLIC",
  },
  new AutoScoringStrategy()
);
