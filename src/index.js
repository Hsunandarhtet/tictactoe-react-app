import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
<>
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|Montserrat" rel="stylesheet"></link>
</>
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);