import { GameSize } from "../../models";
import Row from "./Row";

type GameProps = {
  size: GameSize;
};

function Game({ size }: GameProps) {
  const grid = [];

  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    grid.push(<Row key={rowIndex} index={rowIndex} size={size} />);
  }
  return <div className="grid">{grid.map((row) => row)}</div>;
}

export default Game;
