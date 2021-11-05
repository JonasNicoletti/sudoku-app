import SizeController from "./size-controller";
import Timer from "./timer";

function ControlPanel() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Timer />
      </div>
      <SizeController />
    </div>
  );
}

export default ControlPanel;
