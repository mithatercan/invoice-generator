import React from "react";
import ReactDOM from "react-dom";
import { InvoiceProvider } from "./context/InvoiceContext";
import { FilterModalProvider } from "./context/FilterModalContext";
import App from "./App";
import "./scss/globals/index.scss";
ReactDOM.render(
  <React.StrictMode>
    <InvoiceProvider>
      <FilterModalProvider>
        <App />
      </FilterModalProvider>
    </InvoiceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
