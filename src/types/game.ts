export interface Difference {
  id: number;
  leftX: number;
  leftY: number;
  rightX: number;
  rightY: number;
  radius: number;
}

export interface ImageSet {
  id: string;
  title: string;
  leftSvg: string;
  rightSvg: string;
  differences: Difference[];
}

export interface WrongClick {
  id: string;
  x: number;
  y: number;
  side: 'left' | 'right';
}

export interface GameStore {
  shuffledSets: ImageSet[];
  currentSetIndex: number;
  foundDifferences: number[];
  wrongClicks: WrongClick[];
  startTime: number | null;
  endTime: number | null;
  elapsed: number;
  isCompleted: boolean;
  showHint: boolean;

  initGame: () => void;
  handleImageClick: (x: number, y: number, side: 'left' | 'right') => void;
  removeWrongClick: (id: string) => void;
  nextSet: () => void;
  restartCurrent: () => void;
  toggleHint: () => void;
  setElapsed: (ms: number) => void;
}
