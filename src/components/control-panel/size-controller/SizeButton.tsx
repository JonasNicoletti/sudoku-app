import { GameSize } from "../../../models";
import useStore from "../../../store";

function SizeButton({ displaySize }: { displaySize: GameSize }) {
  const { size, setSize } = useStore();

  return (
    <input
      id="size"
      type="button"
      className={
        size === displaySize
          ? `size-controller-button border`
          : `size-controller-button`
      }
      value={GameSize[displaySize]}
      onClick={() => setSize(displaySize)}
    />
  );
}

export default SizeButton;
