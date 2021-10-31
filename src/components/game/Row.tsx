import { CellModel } from "../../models";
import Cell from "./Cell";

type RowProps = {
  index: number;
  row: CellModel[];
};

function Row({ index, row }: RowProps) {
  const cellGrid = [];
  for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
    const cell = (
      <Cell
        key={columnIndex}
        hasBorder={isSection(columnIndex, row.length)}
        row={index}
        column={columnIndex}
        size={row.length}
        value={row[columnIndex].value}
        isDeletable={row[columnIndex].isDeletable}
      />
    );
    cellGrid.push(cell);
  }
  return (
    <div className={isSection(index, row.length) ? "row border" : "row"}>
      {cellGrid.map((c) => c)}
    </div>
  );
}

function isSection(index: number, size: number) {
  return (index + 1) % Math.sqrt(size) === 0;
}

export default Row;
