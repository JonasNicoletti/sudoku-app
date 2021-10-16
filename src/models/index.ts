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