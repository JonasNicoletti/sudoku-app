import React, { createRef } from "react";
import { createPopper } from "@popperjs/core";
import useOutsideClick from "../../utils/outside-click";
import CellInput from "./CellInput";

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
  const [popoverShow, setPopoverShow] = React.useState(false);
  const cellRef = createRef<HTMLDivElement>();
  const popoverRef = createRef<HTMLDivElement>();

  const openPopover = () => {
    if (cellRef.current !== null && popoverRef.current !== null) {
      createPopper(cellRef.current, popoverRef.current, {
        placement: "top",
      });
      setPopoverShow(true);
    }
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  useOutsideClick(cellRef, () => closePopover());
  return (
    <>
      <div
        className={`border border-gray-800 ${
          popoverShow ? "active-shadow" : null
        }`}
        onClick={() => {
          if (isDeletable) {
            openPopover();
          }
        }}
        ref={cellRef}
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
      <div
        className={
          (popoverShow ? "" : "hidden ") +
          "border-0 mb-3 block z-50 font-normal text-sm max-w-xs text-left font-semibold rounded-lg"
        }
        ref={popoverRef}
      >
        <CellInput size={size} closePopup={() => closePopover()} />
      </div>
    </>
  );
}

export default Cell;
