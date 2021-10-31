import useStore from "../../store";
import GameController from "./game-controller";
import SizeController from "./size-controller";
import Timer from "./timer";

function ControlPanel() {
  const gameId = useStore((store) => store.gameId);
  return (
    <div className="control-panel">
      <div className="control-panel-header">
        <Timer />
        <h3>{gameId ? gameId : ""}</h3>
      </div>
      <GameController />
      <SizeController />
    </div>
  );
}

export default ControlPanel;
