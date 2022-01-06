import { createContext, useState } from "react";
import html2canvas from "html2canvas";
export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [component, setComponent] = useState(null);

  const downloadInvoice = async () => {
    const element = component;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <InvoiceContext.Provider value={{ setComponent, downloadInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};
