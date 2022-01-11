import React from "react";
import ReactDOM from "react-dom";
import { InvoiceProvider } from "./context/InvoiceContext";
import { FilterModalProvider } from "./context/FilterModalContext";
import { InvoiceFormProvider } from "./context/InvoiceFormContext";
import { DataProvider } from "./context/DataContext";
import App from "./App";
import "./scss/globals/index.scss";
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <InvoiceProvider>
        <FilterModalProvider>
          <InvoiceFormProvider>
            <App />
          </InvoiceFormProvider>
        </FilterModalProvider>
      </InvoiceProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
