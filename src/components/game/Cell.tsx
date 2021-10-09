type CellProps = {
  value: string;
  hasBorder: boolean;
};

function Cell({ value, hasBorder }: CellProps) {
  return <div className={hasBorder ? "cell border" : "cell"}>{value} </div>;
}

export default Cell;
