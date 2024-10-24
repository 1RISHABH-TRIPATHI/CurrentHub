import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Store/Store.js";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(

  <Provider store={Store}>
    <StrictMode>
    <App />
    </StrictMode>
  </Provider>
);
