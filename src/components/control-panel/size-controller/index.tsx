import { GameSize } from "../../../models";
import useStore from "../../../store";
import ButtonController from "../ButtonController";

function SizeController() {
  const { size, setSize } = useStore();

  return (
    <div className="size-controller">
      <ButtonController
        displayName={GameSize[GameSize.small]}
        onClick={() => setSize(GameSize.small)}
        isActive={size === GameSize.small}
      />
      <ButtonController
        displayName={GameSize[GameSize.normal]}
        onClick={() => setSize(GameSize.normal)}
        isActive={size === GameSize.normal}
      />
      {/* <SizeButton displaySize={GameSize.large} /> */}
    </div>
  );
}

export default SizeController;
