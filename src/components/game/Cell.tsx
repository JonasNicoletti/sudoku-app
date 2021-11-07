import React, { createRef } from "react";
import { createPopper } from "@popperjs/core";
import useOutsideClick from "../../utils/outside-click";
import CellInput from "./CellInput";
import useStore from "../../store";

type CellProps = {
  hasBottomBorder: boolean;
  hasRightBorder: boolean;
  row: number;
  column: number;
  value: number;
  isDeletable: boolean;
  size: number;
};

const getReadableValue = (value: number) => {
  return value === 0 ? "" : value;
};

function Cell({ row, column, value, isDeletable, size, hasBottomBorder, hasRightBorder }: CellProps) {
  const setCell = useStore((s) => s.setCell);

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
  const onValueChange = (value: number) => {
    setCell(row, column, value);
    closePopover();
  };
  useOutsideClick(cellRef, () => closePopover());
  const cellBorder = () => {
    if (hasBottomBorder && hasRightBorder) {
      return "border-b-2 border-r-2 border-l border-t"
    }
    if (hasBottomBorder) {
      return "border-b-2 border-l border-t border-r"
    }
    if (hasRightBorder) {
      return "border-r-2 border-l border-t border-b"
    }
    
    return "border";
  };
  
  return (
    <>
      <div
        className={`border-gray-800 ${
          popoverShow ? "active-shadow" : ""
        } ${cellBorder()}
      `}
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
        <CellInput
          size={size}
          onClick={(newValue) => onValueChange(newValue)}
        />
      </div>
    </>
  );
}

export default Cell;
