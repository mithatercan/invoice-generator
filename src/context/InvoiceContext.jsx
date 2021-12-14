import { createContext } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  return <InvoiceContext.Provider value='test'> {children}</InvoiceContext.Provider>;
};
