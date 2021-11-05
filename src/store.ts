import create from "zustand"
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { GetState, SetState } from "zustand";

import { CellModel, GameDto, GameMode, GameSize, GameState, ModalState, RecordDto } from "./models"
import { isValidValue, isGameSolved, getEmptyGrid, gridToGameModel } from "./utils/grid-operations";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI,
});

const INITIAL_SIZE = GameSize.normal
const { solvedGrid: INITIAL_SOLVED_GRID, grid: INITIAL_GRID } = getEmptyGrid(INITIAL_SIZE)

interface SizeState {
  size: GameSize;
  setSize: (size: GameSize) => void;
}

const createSize = (set: SetState<State>, get: GetState<State>) => ({
  size: INITIAL_SIZE,
  setSize: (size: GameSize) => {
    set({
      size: size,
    })
  },
});

interface GridState {
  solvedGrid: number[][];
  grid: CellModel[][];
  gameId: string | undefined;
  records: RecordDto[];
  setGrid: (dto: GameDto) => void;
  getCell: (row: number, column: number) => CellModel;
  setCell: (row: number, column: number, value: number) => void;
}

const createGrid = (set: SetState<State>, get: GetState<State>) => ({
  solvedGrid: INITIAL_SOLVED_GRID,
  grid: INITIAL_GRID,
  gameId: undefined,
  records: [],
  setGrid: ({ grid, solvedGrid, id, size, records }: GameDto) => {
    set(() => ({
      solvedGrid: solvedGrid,
      grid: gridToGameModel(grid),
      gameId: id,
      records: records,
      state: GameState.NEW,
      size: size
    }))
  },
  getCell: (row: number, column: number) => {
    return get().grid[row][column]
  },
  setCell: (row: number, column: number, value: number) => {
    const grid = get().grid
    const size = get().size;
    const numberGrid = grid.map(r => r.map(v => v.value));
    grid[row][column].isCorrect = isValidValue(numberGrid, row, column, value, size);
    grid[row][column].value = value
    const gameOver = isGameSolved(grid)
    if (gameOver) {
      set({
        state: GameState.FINISHED,
        grid: grid
      })
    } else {
      set({
        grid: grid,
      })
    }
  }
})

interface ControllerState {
  mode: GameMode;
  state: GameState;
  modalState: ModalState;
  setModalState: (v: ModalState) => void;
  time: number;
  hints: number;
  setState: (state: GameState, gameId?: string) => void;
  hint: () => void;
  setTime: (time: number) => void;
  addRecord: (record: RecordDto) => void;
}

const createController = (set: SetState<State>, get: GetState<State>) => ({
  mode: GameMode.SOLO,
  state: GameState.EMPTY,
  modalState: ModalState.NONE,
  setModalState: (v: ModalState) => {
    set({
      modalState: v
    })
  },
  time: 0,
  hints: 0,
  setState: async (state: GameState, gameId?: string) => {
    if (state === GameState.NEW) {
      if (gameId) {
        const { data: { records }, } = await axiosClient.get<GameDto>(`/games/${gameId}`)
        set({
          state: state,
          records: records,
          hints: 0,
        })

      } else {
        const { data: { grid, id, solvedGrid, size, records }, } = await axiosClient.get<GameDto>(`/games/random/${get().size}`)
        set({
          state: state,
          grid: gridToGameModel(grid),
          solvedGrid: solvedGrid,
          size: size,
          gameId: id,
          records: records,
          hints: 0,
        })

      }

    } else {
      set({
        state: state
      })
    }
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
    if (isOver) {
      set({
        state: GameState.FINISHED,
        grid: grid,
        hints: get().hints + 1
      })
    } else {
      set({
        grid: grid,
        hints: get().hints + 1
      })
    }
  },
  setTime: (time: number) => {
    set({
      time: time
    })
  },
  addRecord: (record: RecordDto) => {
    set({
      records: get().records.concat(record)
    })
  }
})

export type State = SizeState & GridState & ControllerState;

const useStore = create<State>((set, get) => ({
  ...createSize(set, get),
  ...createGrid(set, get),
  ...createController(set, get),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore as any);
}
export default useStore