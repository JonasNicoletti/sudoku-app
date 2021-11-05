import { useState } from "react";
import useStore from "../../store";
import Modal from "react-modal";
type CellProps = {
  hasBorder: boolean;
  row: number;
  column: number;
  value: number;
  isDeletable: boolean;
  size: number;
};

const getReadableValue = (value: number) => {
  return value === 0 ? "" : value;
};

function Cell({ row, column, value, isDeletable, size }: CellProps) {
  Modal.setAppElement("#root");
  const { setCell } = useStore();
  const [isActive, setIsActive] = useState(false);
  const dial = [];

  for (let index = 0; index < size + 1; index++) {
    dial.push(
      <div
        className="value-input"
        key={index}
        onClick={() => {
          setCell(row, column, index);
        }}
      >
        {index === 0 ? "-" : index}
      </div>
    );
  }
  return (
    <div
      className="border border-gray-800"
      onClick={() => setIsActive(isDeletable && !isActive)}
    >
      <span
        className={
          `${isDeletable ? null : "font-bold "}` +
          " h-8 w-8 lg:w-16 lg:h-16 md:w-12 md:h-12 flex items-center justify-center"
        }
      >
        {getReadableValue(value)}
      </span>
    </div>
  );
}

export default Cell;
