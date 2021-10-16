import create from "zustand"
import { GetState, SetState } from "zustand";

import { CellModel, GameSize } from "./models"
import { generateGame, isValidValue } from "./utils/grid-operations";

const INITIAL_SIZE = GameSize.normal
interface SizeState {
  size: GameSize;
  setSize: (size: GameSize) => void;
}
const createSize = (set: SetState<GameState>, get: GetState<GameState>) => ({
  size: INITIAL_SIZE,
  setSize: (size: GameSize) => {
    set({
      size: size,
    })
    if (get().isNew) {
      set({
        grid: generateGame(size)
      })
    }
  },
});

interface GridState {
  grid: CellModel[][]
  setGrid: (size: GameSize) => void;
  getCell: (row: number, column: number) => CellModel;
  setCell: (row: number, column: number, value: number) => boolean;
}

const createGrid = (set: SetState<GameState>, get: GetState<GameState>) => ({
  grid: generateGame(INITIAL_SIZE),
  setGrid: (size: GameSize) => set(() => ({
    grid: generateGame(size)
  })),
  getCell: (row: number, column: number) => {
    return get().grid[row][column]
  },
  setCell: (row: number, column: number, value: number) => {
    const isSolvable = true;
    const grid = get().grid
    const size = get().size;
    grid[row][column].value = value
    const numberGrid = grid.map(r => r.map(v => v.value));
    grid[row][column].isCorrect = isValidValue(numberGrid, row, column, value, size)
    set({
      grid: grid
    })
    return isSolvable;
  }
})

interface ControllerState {
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  isNew: boolean;
  setIsNew: (isNew: boolean) => void;
}

const createController = (set: SetState<GameState>, get: GetState<GameState>) => ({
  isRunning: false,
  setIsRunning: (isRunning: boolean) => set({ isRunning: isRunning }),
  isNew: true,
  setIsNew: (isNew: boolean) => {
    if (isNew) {
      set({
        grid: generateGame(get().size)
      })
    }
    set({
      isNew: isNew
    })

  }
})

export type GameState = SizeState & GridState & ControllerState;

const useStore = create<GameState>((set, get) => ({
  ...createSize(set, get),
  ...createGrid(set, get),
  ...createController(set, get),
}));


export default useStore