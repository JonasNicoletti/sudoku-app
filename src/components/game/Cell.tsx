import { useState } from "react";
import useStore from "../../store";
import Modal from "react-modal";
import { CSSProperties } from "react";
type CellProps = {
  hasBorder: boolean;
  row: number;
  column: number;
};

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

const getReadableValue = (value: number) => {
  return value === 0 ? "" : value;
};

function Cell({ row, column, hasBorder }: CellProps) {
  Modal.setAppElement("#root");
  const { getCell, setCell, size } = useStore((state) => state);
  const [isActive, setIsActive] = useState(false);
  const value = getCell(row, column);
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
      className={`cell ${hasBorder ? "border" : ""} ${
        isActive ? "active" : ""
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      {getReadableValue(value)}
      <Modal
        isOpen={isActive}
        onAfterClose={() => setIsActive(false)}
        style={customStyles}
      >
        {dial.map((d) => d)}
      </Modal>
    </div>
  );
}

export default Cell;
