import { GameState } from "../../../models";
import useStore from "../../../store";
import CustomButton from "../../common/ButtonController";

function GameController() {
  const { state, setState, hint } = useStore();

  return (
    <>
      <CustomButton
        displayName={state === GameState.RUNNING ? "Stop" : "Start"}
        onClick={() => {
          if (state !== GameState.RUNNING) {
            setState(GameState.RUNNING);
          } else {
            setState(GameState.STOPPED);
          }
        }}
        isActive={false}
        disabled={
          state === GameState.EMPTY ||
          state === GameState.FETCHING ||
          state === GameState.FINISHED ||
          state === GameState.STOPPED
        }
      />
      <CustomButton
        displayName="New Game"
        onClick={() => {
          setState(GameState.NEW);
        }}
        isActive={false}
        disabled={state === GameState.RUNNING}
      />
      <CustomButton
        displayName="Hint"
        onClick={() => hint()}
        isActive={false}
        disabled={state !== GameState.RUNNING}
      />
    </>
  );
}

export default GameController;
