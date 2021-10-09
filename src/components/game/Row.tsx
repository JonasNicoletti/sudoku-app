import Cell from "./Cell";

function Row({ index, size }: { index: number; size: number }) {
  const row = [];
  for (let columnIndex = 0; columnIndex < size; columnIndex++) {
    const cell = <Cell key={columnIndex} value={`-`} />;
    row.push(cell);
  }
  return <div className="row">{row.map((c) => c)}</div>;
}

export default Row;
