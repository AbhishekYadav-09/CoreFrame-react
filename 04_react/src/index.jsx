import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./aap.jsx";

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container)
// root.render(React.createElement(<App/>))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


