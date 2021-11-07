import { QueryClient, QueryClientProvider } from "react-query";
import Timer from "./components/control-panel/timer";
import Game from "./components/game";
import Header from "./components/header";
import ChallengeInitializer from "./components/modals/ChallengeInitializer";
import SoloInitializer from "./components/modals/SoloInitializer";
import RightSidePanel from "./components/right-side-panel";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2">
        <Game />
        <div className="sm:grid w-full h-full">
            <Timer />
            <RightSidePanel />
        </div>
      </div>
      <ChallengeInitializer />
      <SoloInitializer />
    </QueryClientProvider>
  );
}

export default App;
