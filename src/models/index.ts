export enum GameSize {
  small = 4,
  normal = 9,
  //FIXME: NOT PERFORMANT ENOUGH
  // large = 16,
}

export interface CellModel {
  value: number
  isDeletable: boolean
  isCorrect: boolean
}
export interface GameDto {
  id: string;
  size: number;
  solvedGrid: number[][];
  grid: number[][];
  records: RecordDto[];
}

export interface RecordDto {
  userName: string
  gameId: string
  score: number
}

export enum GameState {
  EMPTY,
  RUNNING,
  STOPPED,
  NEW,
  FETCHING,
  FINISHED
}

export interface GameModel {
  solvedGrid: number[][]
  grid: CellModel[][]
}