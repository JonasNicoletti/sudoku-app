import useStore from "../../../store";
import ButtonController from "../ButtonController";

function GameController() {
  const { isRunning, setIsRunning, isNew, setIsNew, hint } = useStore();

  return (
    <>
      <ButtonController
        displayName="Start"
        onClick={() => {
          setIsRunning(true);
          setIsNew(false);
        }}
        isActive={false}
        disabled={isRunning}
      />
      <ButtonController
        displayName="New"
        onClick={() => {
          setIsRunning(false);
          setIsNew(true);
        }}
        isActive={false}
        disabled={isNew}
      />
      <ButtonController
        displayName="Hint"
        onClick={() => hint()}
        isActive={false}
      />
    </>
  );
}

export default GameController;
