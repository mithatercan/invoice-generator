import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import InvoiceForm from "./InvoiceForm";
import { InvoiceFormContext } from "../context/InvoiceFormContext";
import "../scss/components/layout.scss";

const Layout = ({ children }) => {
  const { isOpened, setIsOpened } = useContext(InvoiceFormContext);
  return (
    <div className='layout display-flex '>
      <Sidebar />
      <main>
        {children}
        <InvoiceForm />
        <div
          onClick={() => setIsOpened(false)}
          className={`back-drop ${isOpened && "opened"}`}
        ></div>
      </main>
    </div>
  );
};

export default Layout;
