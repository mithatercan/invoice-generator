import { createContext, useState } from "react";

export const InvoiceFormContext = createContext();

export const InvoiceFormProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const [data, setData] = useState({
    id: `${Date.now()}`,
    status: "Pending",
    currency: "USD",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientName: "",
    clientEmail: "",
    invoiceDate: "",
    paymentDue: "",
    description: "",
    items: [],
  });

  return (
    <InvoiceFormContext.Provider
      value={{
        isOpened,
        setIsOpened,
        data,
        setData,
      }}
    >
      {children}
    </InvoiceFormContext.Provider>
  );
};
