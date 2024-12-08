import React from "react";
import { hydrate, render } from "react-dom"; // Import both hydrate and render
import App from "./App.jsx";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");

// Use hydrate if there is pre-rendered content, otherwise use render
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
}
