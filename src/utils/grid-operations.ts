import { CellModel, GameModel, GameSize } from "../models";

type SquareRange = {
  from: number,
  to: number
}

let counter = 0;


function generateGame(size: GameSize): GameModel {
  const grid = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(0));

  fillGrid(size, grid);
  const solvedGrid = deepCopy(grid)
  let attempts = 0;
  while (attempts < 5) {
    let r = getRandom(Array.from(Array(size).keys()))
    let c = getRandom(Array.from(Array(size).keys()))
    while (grid[r][c] === 0) {
      r = getRandom(Array.from(Array(size).keys()))
      c = getRandom(Array.from(Array(size).keys()))
    }
    const backup = grid[r][c]
    grid[r][c] = 0

    const copyGrid = deepCopy(grid)
    counter = 0
    solveGrid(size, copyGrid)
    if (counter !== 1) {
      grid[r][c] = backup
      attempts += 1
    }
  }
  return {
    solvedGrid: solvedGrid,
    grid: grid.map(row => row.map(v => { return { value: v, isCorrect: v !== 0, isDeletable: v === 0 } as CellModel }))
  } 

}

function fillGrid(size: GameSize, grid: number[][]): boolean | void {
  let numbers = Array.from({ length: size }, (_, i) => i + 1)

  const squareSize = Math.sqrt(size);
  const separators: SquareRange[] = Array.from({ length: squareSize }, (_, i) => { return { from: i * squareSize, to: (i + 1) * squareSize } });
  let row = 0;
  let column = 0;
  for (let i = 0; i < size * size; i++) {
    row = Math.floor(i / size);
    column = i % size;

    if (grid[row][column] === 0) {
      numbers = shuffle(numbers);
      for (const value of numbers) {
        // check if value fits row
        if (!grid[row].includes(value)) {
          // eslint-disable-next-line no-loop-func
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
              grid[row][column] = value
              if (checkGrid(grid)) {
                return true
              } else {
                if (fillGrid(size, grid)) {
                  return true;
                }
              }
            }
          }
        }
      }
      break;
    }
  }
  grid[row][column] = 0
}

function solveGrid(size: GameSize, grid: number[][]): boolean | void {
  let numbers = Array.from({ length: size }, (_, i) => i + 1)

  const squareSize = Math.sqrt(size);
  const separators: SquareRange[] = Array.from({ length: squareSize }, (_, i) => { return { from: i * squareSize, to: (i + 1) * squareSize } });
  let row = 0;
  let column = 0;
  for (let i = 0; i < size * size; i++) {
    row = Math.floor(i / size);
    column = i % size;

    if (grid[row][column] === 0) {
      for (const value of numbers) {
        // check if value fits row
        if (!grid[row].includes(value)) {
          // eslint-disable-next-line no-loop-func
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
              grid[row][column] = value
              if (checkGrid(grid)) {
                counter += 1;
                break;
              } else {
                if (solveGrid(size, grid)) {
                  return true;
                }
              }
            }
          }
        }
      }
      break;
    }
  }
  grid[row][column] = 0

}

function checkGrid(grid: number[][]) {
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === 0) {
        return false;
      }

    }
  }
  return true;
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
function shuffle(a: Array<number>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRandom(array: Array<number>): number {
  return array[Math.floor(Math.random() * array.length)];
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

export { generateGame, isValidValue, isGameSolved }