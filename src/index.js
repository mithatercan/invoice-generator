import React from "react";
import ReactDOM from "react-dom";
import { InvoiceProvider } from "./context/InvoiceContext";
import { FilterModalProvider } from "./context/FilterModalContext";
import { InvoiceFormProvider } from "./context/InvoiceFormContext";
import App from "./App";
import "./scss/globals/index.scss";
ReactDOM.render(
  <React.StrictMode>
    <InvoiceProvider>
      <FilterModalProvider>
        <InvoiceFormProvider>
          <App />
        </InvoiceFormProvider>
      </FilterModalProvider>
    </InvoiceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
