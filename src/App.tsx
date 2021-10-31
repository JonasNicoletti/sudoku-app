import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ControlPanel from "./components/control-panel";
import Game from "./components/game";
import LeaderBoard from "./components/leaderboard";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Route path="/:id">
            <Game />
          </Route>
          <Route exact path="/">
            <Game />
          </Route>
          <div className="left-side">
            <ControlPanel />
            <LeaderBoard />
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
