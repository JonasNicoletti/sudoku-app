import create from "zustand"
import { GetState, SetState } from "zustand";

import { GameSize } from "./models"

export interface SizeState {
  size: GameSize;
  setSize: (size: GameSize) => void;
}
const createSize = (set: SetState<SizeState>, get: GetState<SizeState>) => ({
  size: GameSize.normal,
  setSize: (size: GameSize) => set(() => ({ size: size })),
});

export type GameState = SizeState;

const useStore = create<GameState>((set, get) => ({
  ...createSize(set, get),
}));


export default useStore