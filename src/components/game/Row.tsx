import useStore from "../../store";
import Cell from "./Cell";

type RowProps = {
  index: number;
  size: number;
};

function Row({ index, size }: RowProps) {
  const { getCell } = useStore((state) => state);
  const row = [];
  for (let columnIndex = 0; columnIndex < size; columnIndex++) {
    const cell = (
      <Cell
        key={columnIndex}
        value={getCell(index, columnIndex)}
        hasBorder={isSection(columnIndex, size)}
      />
    );
    row.push(cell);
  }
  return (
    <div className={isSection(index, size) ? "row border" : "row"}>
      {row.map((c) => c)}
    </div>
  );
}

function isSection(index: number, size: number) {
  return (index + 1) % Math.sqrt(size) === 0;
}

export default Row;
