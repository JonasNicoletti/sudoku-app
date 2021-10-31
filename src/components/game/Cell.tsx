import { useState } from "react";
import useStore from "../../store";
import Modal from "react-modal";
import { CSSProperties } from "react";
import { GameState } from "../../models";
type CellProps = {
  hasBorder: boolean;
  row: number;
  column: number;
  value: number;
  isDeletable: boolean;
  size: number;
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

function Cell({ row, column, hasBorder, value, isDeletable, size }: CellProps) {
  Modal.setAppElement("#root");
  const { setCell, state } = useStore();
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
      className={`cell ${hasBorder ? "border" : ""} ${
        isActive ? "active" : ""
      } ${isDeletable ? "" : "fix"}`}
      onClick={() => setIsActive(isDeletable && !isActive)}
    >
      <span className={state === GameState.NEW ? "blur" : ""}>
        {getReadableValue(value)}
      </span>
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
