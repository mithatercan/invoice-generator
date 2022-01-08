import React from "react";
import Sidebar from "./Sidebar";
import InvoiceForm from "./InvoiceForm";
import "../scss/components/layout.scss";

const Layout = ({ children }) => {
  return (
    <div className='layout display-flex '>
      <Sidebar />
      <main>
        {children} <InvoiceForm />
      </main>
    </div>
  );
};

export default Layout;
