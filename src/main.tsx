import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WordleProvider } from "./context/wordle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WordleProvider>
      <App />
    </WordleProvider>
  </React.StrictMode>
);
