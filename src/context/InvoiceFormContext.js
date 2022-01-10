import { createContext, useState } from "react";

export const InvoiceFormContext = createContext();

export const InvoiceFormProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <InvoiceFormContext.Provider
      value={{
        isOpened,
        setIsOpened,
      }}
    >
      {children}
    </InvoiceFormContext.Provider>
  );
};
