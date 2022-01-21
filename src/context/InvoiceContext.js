import { createContext, useState } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoice, setInvoice] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <InvoiceContext.Provider
      value={{
        invoice,
        setInvoice,
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
