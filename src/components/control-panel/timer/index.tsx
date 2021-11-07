import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { GameState } from "../../../models";
import useStore from "../../../store";

function Timer() {
  const { state, setTime } = useStore();
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
    <div className="text-center flex w-full items-center justify-center text-4xl mr-1 font-extralight p-4">
      <div className="flex">
          <div >{Math.floor(minutes / 10)}</div>
          <div >{minutes % 10}</div>
      </div>
      <div>:</div>
      <div className="flex">
          <div >{Math.floor(seconds / 10)}</div>
          <div >{seconds % 10}</div>
      </div>
      </div>
  );
}

export default Timer;
