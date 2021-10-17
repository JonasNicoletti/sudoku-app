import create from "zustand"
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { GetState, SetState } from "zustand";

import { CellModel, GameSize } from "./models"
import { generateGame, isValidValue, isGameSolved } from "./utils/grid-operations";

const INITIAL_SIZE = GameSize.normal
const { solvedGrid: INITIAL_SOLVED_GRID, grid: INITIAL_GRID } = generateGame(INITIAL_SIZE)

interface SizeState {
  size: GameSize;
  setSize: (size: GameSize) => void;
}
const createSize = (set: SetState<GameState>, get: GetState<GameState>) => ({
  size: INITIAL_SIZE,
  setSize: (size: GameSize) => {
    const { solvedGrid, grid } = generateGame(size);
    set({
      solvedGrid: solvedGrid,
      grid: grid,
      size: size,
    })
  },
});

interface GridState {
  solvedGrid: number[][];
  grid: CellModel[][];
  setGrid: (size: GameSize) => void;
  getCell: (row: number, column: number) => CellModel;
  setCell: (row: number, column: number, value: number) => boolean;
}

const createGrid = (set: SetState<GameState>, get: GetState<GameState>) => ({
  solvedGrid: INITIAL_SOLVED_GRID,
  grid: INITIAL_GRID,
  setGrid: (size: GameSize) => {
    const { solvedGrid, grid } = generateGame(size);
    set(() => ({
      solvedGrid: solvedGrid,
      grid: grid
    }))
  },
  getCell: (row: number, column: number) => {
    return get().grid[row][column]
  },
  setCell: (row: number, column: number, value: number) => {
    const isSolvable = true;
    const grid = get().grid
    const size = get().size;
    const numberGrid = grid.map(r => r.map(v => v.value));
    grid[row][column].isCorrect = isValidValue(numberGrid, row, column, value, size);
    grid[row][column].value = value
    const gameOver = isGameSolved(grid)
    set({
      grid: grid,
      isRunning: !gameOver,
      isOver: gameOver
    })
    return isSolvable;
  }
})

interface ControllerState {
  isOver: boolean;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  isNew: boolean;
  setIsNew: (isNew: boolean) => void;
  hint: () => void;
}

const createController = (set: SetState<GameState>, get: GetState<GameState>) => ({
  isOver: false,
  isRunning: false,
  setIsRunning: (isRunning: boolean) => set({ isRunning: isRunning }),
  isNew: true,
  setIsNew: (isNew: boolean) => {
    if (isNew) {
      const { solvedGrid, grid } = generateGame(get().size);
      set({
        solvedGrid: solvedGrid,
        grid: grid
      })
    }
    set({
      isNew: isNew
    })
  },
  hint: () => {
    const { solvedGrid, grid } = get();
    loop:
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      const column = grid[rowIndex];
      for (let columnIndex = 0; columnIndex < column.length; columnIndex++) {
        const cell = column[columnIndex];
        if (cell.value === 0) {
          cell.value = solvedGrid[rowIndex][columnIndex];
          cell.isCorrect = true
          break loop;
        }
      }
    }
    const isOver = isGameSolved(grid)
    set({
      grid: grid,
      isOver: isOver,
      isRunning: !isOver,
    })
  }
})

export type GameState = SizeState & GridState & ControllerState;

const useStore = create<GameState>((set, get) => ({
  ...createSize(set, get),
  ...createGrid(set, get),
  ...createController(set, get),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore as any);
}
export default useStore