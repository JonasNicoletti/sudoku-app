import { GameSize } from "../../../models";
import useStore from "../../../store";
import CustomButton from "../../common/ButtonController";

function SizeController() {
  const { size, setSize } = useStore();

  return (
    <div className="size-controller">
      <CustomButton
        displayName={GameSize[GameSize.small]}
        onClick={() => setSize(GameSize.small)}
        isActive={size === GameSize.small}
      />
      <CustomButton
        displayName={GameSize[GameSize.normal]}
        onClick={() => setSize(GameSize.normal)}
        isActive={size === GameSize.normal}
      />
      {/* <SizeButton displaySize={GameSize.large} /> */}
    </div>
  );
}

export default SizeController;
