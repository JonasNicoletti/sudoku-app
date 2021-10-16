import create from "zustand"
import { GetState, SetState } from "zustand";

import { GameSize } from "./models"
import { generateGame, isValidValue } from "./utils/grid-operations";

const INITIAL_SIZE = GameSize.normal
interface SizeState {
  size: GameSize;
  setSize: (size: GameSize) => void;
}
const createSize = (set: SetState<GameState>, get: GetState<GameState>) => ({
  size: INITIAL_SIZE,
  setSize: (size: GameSize) => set(() => ({
    size: size, grid: generateGame(size,)
  })),
});

interface GridState {
  grid: number[][]
  setGrid: (size: GameSize) => void;
  getCell: (row: number, column: number) => number;
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
    const size = get().size;
    const toValidateGrid = get().grid;
    const isSolvable = value === 0 || isValidValue(toValidateGrid, row, column, value, size);
    if (isSolvable) {
      toValidateGrid[row][column] = value;
      set({
        grid: toValidateGrid
      });
    }
    return isSolvable;
  }
})



export type GameState = SizeState & GridState;

const useStore = create<GameState>((set, get) => ({
  ...createSize(set, get),
  ...createGrid(set, get)
}));


export default useStore