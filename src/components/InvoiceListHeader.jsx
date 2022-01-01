import React from "react";
import Filter from "./Filter";
import NewInvoiceBtn from "./NewInvoiceBtn";
import "../scss/components/list-header.scss";
const InvoiceListHeader = () => {
  return (
    <header className='list-header display-flex jc-space-between'>
      <div>
        <h2>Invoices</h2>
        <p>There are 4 total invoices.</p>
      </div>
      <div className='display-flex'>
        <Filter />
        <NewInvoiceBtn />
      </div>
    </header>
  );
};

export default InvoiceListHeader;
