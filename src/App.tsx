import Game from "./components/game";
import { GameSize } from "./models";

function App() {
  return (
    <div className="App">
      <Game size={GameSize.normal} />
    </div>
  );
}

export default App;
