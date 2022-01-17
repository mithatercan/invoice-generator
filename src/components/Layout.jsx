import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import InvoiceForm from "./InvoiceForm";
import { InvoiceFormContext } from "../context/InvoiceFormContext";

import "../scss/components/layout.scss";

const Layout = ({ children }) => {
  const { isOpened } = useContext(InvoiceFormContext);
  return (
    <div className='layout display-flex '>
      <Sidebar />
      <main>
        {children}
        <InvoiceForm />
        <div className={`back-drop ${isOpened && "opened"}`}></div>
      </main>
    </div>
  );
};

export default Layout;
