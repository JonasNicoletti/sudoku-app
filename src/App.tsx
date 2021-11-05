import { QueryClient, QueryClientProvider } from "react-query";
import Game from "./components/game";
import Header from "./components/header";
import ChallengeInitializer from "./components/modals/ChallengeInitializer";
import SoloInitializer from "./components/modals/SoloInitializer";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Game />
      <ChallengeInitializer />
      <SoloInitializer />
    </QueryClientProvider>
  );
}

export default App;
