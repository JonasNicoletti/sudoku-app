type CellInputProps = {
  size: number;
  closePopup: () => void;
};
const CellInput = ({ size, closePopup }: CellInputProps) => {
  return (
    <div className={`grid grid-cols-${Math.sqrt(size)} rounded-lg `}>
      {Array.from(Array(size).keys()).map((i) => (
        <div
          key={i}
          className="col-span-1 p-2 text-white border-2 rounded-lg bg-green-400 "
          onClick={() => closePopup()}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default CellInput;
