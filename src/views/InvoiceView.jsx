import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { InvoiceContext } from "../context/InvoiceContext";
import Invoice from "../components/Invoice";

import "../scss/views/invoice.scss";
const InvoiceView = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const { invoice, setInvoice } = useContext(InvoiceContext);

  useEffect(() => {
    setInvoice(state.find((invoice) => invoice.id === id));
  }, [id, state]);

  return <section className='invoice-view'>{invoice ? <Invoice /> : "Loading..."}</section>;
};

export default InvoiceView;
