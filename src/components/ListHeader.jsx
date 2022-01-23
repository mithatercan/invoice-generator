import React, { useContext } from "react";
import Filter from "./Filter";
import NewInvoiceBtn from "./NewInvoiceBtn";
import { DataContext } from "../context/DataContext";
import "../scss/components/list-header.scss";

const ListHeader = () => {
  const { state } = useContext(DataContext);
  return (
    <header className='list-header display-flex ai-center jc-space-between'>
      <div className='list-header__heading'>
        <h1>Invoices</h1>
        <small>{state.length} total invoices.</small>
      </div>
      <div className='display-flex ai-center'>
        <Filter />
        <NewInvoiceBtn />
      </div>
    </header>
  );
};

export default ListHeader;
