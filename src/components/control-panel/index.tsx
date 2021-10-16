import GameController from "./game-controller";
import SizeController from "./size-controller";
import Timer from "./timer";

function ControlPanel() {
  return (
    <div className="control-panel">
      <div className="control-panel-header">
        <h2>Control Panel</h2>
        <Timer />
      </div>
      <GameController />
      <SizeController />
    </div>
  );
}

export default ControlPanel;
