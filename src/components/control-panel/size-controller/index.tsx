import { GameSize } from "../../../models";
import SizeButton from "./SizeButton";

function SizeController() {
  return (
    <div className="size-controller">
      <h3>Size</h3>
      <SizeButton displaySize={GameSize.small} />
      <SizeButton displaySize={GameSize.normal} />
      <SizeButton displaySize={GameSize.large} />
    </div>
  );
}

export default SizeController;
