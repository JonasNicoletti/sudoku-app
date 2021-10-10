import create from "zustand"
import { GetState, SetState } from "zustand";

import { GameSize } from "./models"
import { generateGame } from "./utils/game-generator";

interface SizeState {
  size: GameSize;
  setSize: (size: GameSize) => void;
}
const createSize = (set: SetState<GameState>, get: GetState<GameState>) => ({
  size: GameSize.normal,
  setSize: (size: GameSize) => set(() => ({
    size: size, grid: generateGame(size,)
  })),
});

interface GridState {
  grid: number[][]
  setGrid: (size: GameSize) => void;
  getCell: (row: number, column: number) => number;
}

const createGrid = (set: SetState<GameState>, get: GetState<GameState>) => ({
  grid: generateGame(GameSize.normal),
  setGrid: (size: GameSize) => set(() => ({
    grid: generateGame(size)
  })),
  getCell: (row: number, column: number) => {
    return get().grid[row][column]
  }
})



export type GameState = SizeState & GridState;

const useStore = create<GameState>((set, get) => ({
  ...createSize(set, get),
  ...createGrid(set, get)
}));


export default useStore