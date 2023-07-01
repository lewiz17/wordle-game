import { Suspense, lazy } from "react";
import { PreLoader } from "./components/Loader";
import { useGameContext } from "./context/wordle";

const MainGame = lazy(() => import("./components/MainGame"));

function App() {
  const { filteredWords } = useGameContext();

  return (
    <>
      {filteredWords.length > 0 ? (
        <Suspense fallback={<PreLoader />}>
          <MainGame />
        </Suspense>
      ) : (
        <PreLoader />
      )}
    </>
  );
}

export default App;
