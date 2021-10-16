import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import useStore from "../../../store";

function Timer() {
  const { isRunning } = useStore();
  const { seconds, minutes, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (isRunning) {
      reset();
    } else {
      pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);
  return (
    <div className="clock">
      <div className="minutes">
        <div className="first">
          <div className="number">{Math.floor(minutes / 10)}</div>
        </div>
        <div className="second">
          <div className="number">{minutes % 10}</div>
        </div>
      </div>
      <div className="tick">:</div>
      <div className="seconds">
        <div className="first">
          <div className="number">{Math.floor(seconds / 10)}</div>
        </div>
        <div className="second infinite">
          <div className="number">{seconds % 10}</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
