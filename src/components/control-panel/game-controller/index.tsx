import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { GameState } from "../../../models";
import useStore from "../../../store";
import CustomButton from "../../common/ButtonController";

function GameController() {
  const { state, setState, hint, size } = useStore();
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_BACKEND_URI || "");
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  useEffect(() => {
    socket?.on("createChallenge", console.log);
  }, [socket]);
  return (
    <div className="flex flex-row">
      <CustomButton
        displayName={"Create Challenge"}
        onClick={() => {
          socket?.emit("createChallenge", size);
        }}
        isActive={false}
      />{" "}
      <CustomButton
        displayName={state === GameState.RUNNING ? "Stop" : "Start"}
        onClick={() => {
          if (state !== GameState.RUNNING) {
            setState(GameState.RUNNING);
          } else {
            setState(GameState.STOPPED);
          }
        }}
        isActive={false}
        disabled={
          state === GameState.EMPTY ||
          state === GameState.FETCHING ||
          state === GameState.FINISHED ||
          state === GameState.STOPPED
        }
      />
      <CustomButton
        displayName="New Game"
        onClick={() => {
          setState(GameState.NEW);
        }}
        isActive={false}
        disabled={state === GameState.RUNNING}
      />
      <CustomButton
        displayName="Hint"
        onClick={() => hint()}
        isActive={false}
        disabled={state !== GameState.RUNNING}
      />
    </div>
  );
}

export default GameController;
