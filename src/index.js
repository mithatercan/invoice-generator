import React from "react";
import ReactDOM from "react-dom";
import { InvoiceProvider } from "./context/InvoiceContext";
import { FormProvider } from "./context/FormContext";
import { DataProvider } from "./context/DataContext";
import App from "./App";
import "./scss/globals/index.scss";
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <InvoiceProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </InvoiceProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
