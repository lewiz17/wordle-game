import React, { Suspense, lazy } from "react";
import { PreLoader } from "./components/Loader";

const MainGame = lazy(() => import("./components/MainGame"));

function App() {
  return (
    <>
      <Suspense fallback={<PreLoader />}>
        <MainGame />
      </Suspense>
    </>
  );
}

export default App;
