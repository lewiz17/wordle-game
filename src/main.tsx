import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WordleProvider } from "./context/wordle";
import { PreLoader } from "./components/Loader";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<PreLoader />}>
      <WordleProvider>
        <App />
      </WordleProvider>
    </Suspense>
  </React.StrictMode>
);
