import React from "react";
import Filter from "./Filter";
import NewInvoiceBtn from "./NewInvoiceBtn";
import data from "../data";
import "../scss/components/list-header.scss";
const InvoiceListHeader = () => {
  return (
    <header className='list-header display-flex ai-center jc-space-between'>
      <div className='list-header__heading'>
        <h1>Invoices</h1>
        <small>There are {data.length} total invoices.</small>
      </div>
      <div className='display-flex ai-center'>
        <Filter />
        <NewInvoiceBtn />
      </div>
    </header>
  );
};

export default InvoiceListHeader;
