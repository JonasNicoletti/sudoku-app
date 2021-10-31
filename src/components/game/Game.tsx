import { CSSProperties, useEffect } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";

import { GameDto, GameState } from "../../models";
import useStore from "../../store";
import UploadRecord from "../upload-record";
import Row from "./Row";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI,
});
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

type GameParam = {
  id: string;
};

function Game() {
  let { id: urlId } = useParams<GameParam>();
  const { grid, state, setState, setGrid } = useStore();

  const gameGrid = [];

  useEffect(() => {
    async function fetchGame() {
      const { data, status } = await axiosClient.get<GameDto>(
        `/games/${urlId}`,
        { validateStatus: (status) => status < 500 }
      );
      if (status === 200) {
        setGrid(data);
      }
    }
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlId]);

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    gameGrid.push(<Row key={rowIndex} index={rowIndex} row={grid[rowIndex]} />);
  }
  return (
    <div className="grid">
      {gameGrid.map((row) => row)}
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
