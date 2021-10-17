import { GameSize } from "../../../models";
import useStore from "../../../store";
import ButtonController from "../ButtonController";

function SizeController() {
  const { size, setSize, isRunning } = useStore();

  return (
    <div className="size-controller">
      <ButtonController
        displayName={GameSize[GameSize.small]}
        onClick={() => setSize(GameSize.small)}
        isActive={size === GameSize.small}
        disabled={isRunning}
      />
      <ButtonController
        displayName={GameSize[GameSize.normal]}
        onClick={() => setSize(GameSize.normal)}
        isActive={size === GameSize.normal}
        disabled={isRunning}
      />
      {/* <SizeButton displaySize={GameSize.large} /> */}
    </div>
  );
}

export default SizeController;
