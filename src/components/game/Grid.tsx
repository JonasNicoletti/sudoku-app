import Row from "./Row";

function Grid({ size }: { size: number }) {
  const grid = [];

  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    grid.push(<Row key={rowIndex} index={rowIndex} size={size} />);
  }
  return <div className="grid">{grid.map((row) => row)}</div>;
}

export default Grid;
