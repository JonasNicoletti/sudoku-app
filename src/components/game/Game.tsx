import { CSSProperties } from "react";
import Modal from "react-modal";

import { GameState } from "../../models";
import useStore from "../../store";
import UploadRecord from "../upload-record";
import Row from "./Row";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  } as CSSProperties, // due flexWrap is not a valid type of Modal.Styles
};

function Game() {
  const { grid, state, setState } = useStore();

  const gameGrid = [];

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    gameGrid.push(<Row key={rowIndex} index={rowIndex} row={grid[rowIndex]} />);
  }
  return (
    <div className="flex m-auto h-full items-center">
      <div
        className={`grid grid-cols-${Math.sqrt(
          grid.length
        )} border-2 border-gray-800`}
      >
        {gameGrid.map((row) => row)}
      </div>
      <Modal
        isOpen={state === GameState.FINISHED}
        onAfterClose={() => setState(GameState.EMPTY)}
        style={customStyles}
      >
        <UploadRecord />
      </Modal>
    </div>
  );
}

export default Game;
