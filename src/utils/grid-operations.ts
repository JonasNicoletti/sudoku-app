import { CellModel, GameModel, GameSize } from "../models";

type SquareRange = {
  from: number,
  to: number
}

function gridToGameModel(grid: number[][]): CellModel[][] {
  return grid.map(row => row.map(v => { return { value: v, isCorrect: v !== 0, isDeletable: v === 0 } as CellModel }))
}


function getEmptyGrid(size: GameSize): GameModel {
  const grid: number[][] = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(0));
  return {
    solvedGrid: grid,
    grid: gridToGameModel(grid)
  }

}

function isGameSolved(grid: CellModel[][]): boolean {
  for (const row of grid) {
    for (const value of row) {
      if (!value.isCorrect || value.value === 0) {
        return false;
      }
    }
  }
  return true;
}


function isValidValue(grid: number[][], row: number, column: number, value: number, size: GameSize): boolean {
  const squareSize = Math.sqrt(size);
  const separators: SquareRange[] = Array.from({ length: squareSize }, (_, i) => { return { from: i * squareSize, to: (i + 1) * squareSize } });
  if (!grid[row].includes(value)) {
    const columnValues = grid.map((r) => r[column]);
    // check if value fits column
    if (!columnValues.includes(value)) {
      // check if value fits square
      const square: number[] = [];

      for (const rowSep of separators) {
        if (row >= rowSep.from && row < rowSep.to) {
          for (const colSep of separators) {
            if (column >= colSep.from && column < colSep.to) {
              for (let r = rowSep.from; r < rowSep.to; r++) {
                for (let c = colSep.from; c < colSep.to; c++) {
                  square.push(grid[r][c])
                }
              }
            }
          }
        }
      }
      if (!square.includes(value)) {
        return true;
      }
    }
  }
  return false;
}

export const deepCopy = <T>(target: T): T => {
  if (target === null) {
    return target;
  }
  if (target instanceof Array) {
    const cp = [] as any[];
    (target as any[]).forEach((v) => { cp.push(v); });
    return cp.map((n: any) => deepCopy<any>(n)) as any;
  }
  if (typeof target === 'object' && target !== {}) {
    const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
    Object.keys(cp).forEach(k => {
      cp[k] = deepCopy<any>(cp[k]);
    });
    return cp as T;
  }
  return target;
};

export { isValidValue, isGameSolved, getEmptyGrid, gridToGameModel }