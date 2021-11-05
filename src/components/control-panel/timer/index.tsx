import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { GameState } from "../../../models";
import useStore from "../../../store";

function Timer() {
  const { state, setTime, hints } = useStore();
  const { seconds, minutes, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (state === GameState.RUNNING) {
      reset();
    } else {
      pause();
      setTime(seconds + minutes * 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <div className="relative overflow-hidden mr-1 flex h3 text-base after:content-[''] before:content-['']">
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
      <div className="hint_plus">+</div>
      <div className="hint_seconds">
        <div className="first">
          <div className="number">{Math.floor((hints * 30) / 10)}</div>
        </div>
        <div className="second infinite">
          <div className="number">{(hints * 30) % 10}</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
