import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { InvoiceProvider } from "./Context/InvoiceContext";
import { ThemeProvider } from "./Context/ThemeContext";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <InvoiceProvider>
        <App />
      </InvoiceProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
