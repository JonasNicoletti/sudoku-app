import useStore from "../../store";
import Row from "./Row";

function Game() {
  const size = useStore((state) => state.size);

  const grid = [];

  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    grid.push(<Row key={rowIndex} index={rowIndex} size={size} />);
  }
  return <div className="grid">{grid.map((row) => row)}</div>;
}

export default Game;
