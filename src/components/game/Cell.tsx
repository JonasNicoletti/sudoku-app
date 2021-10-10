type CellProps = {
  value: number;
  hasBorder: boolean;
};

function Cell({ value, hasBorder }: CellProps) {
  return (
    <div className={hasBorder ? "cell border" : "cell"}>
      {value === 0 ? "" : value}
    </div>
  );
}

export default Cell;
