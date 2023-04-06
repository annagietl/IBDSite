import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";

import App from "./App";

// Rendering the root Element
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
