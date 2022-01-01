import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/globals/index.scss";
import { InvoiceProvider } from "./context/InvoiceContext";
ReactDOM.render(
  <React.StrictMode>
    <InvoiceProvider>
      <App />
    </InvoiceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
