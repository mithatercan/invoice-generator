import React, { useContext, useEffect } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { useParams } from "react-router-dom";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceCard from "../components/InvoiceCard";
import data from "../data";
import "../scss/views/invoice.scss";
const Invoice = () => {
  const { id } = useParams();
  const { invoice, setInvoice } = useContext(InvoiceContext);

  useEffect(() => {
    const invoice = data.find((invoice) => invoice.id === id);
    setInvoice(invoice);
  }, [id]);

  return (
    <section className='invoice-view'>
      <InvoiceCard />
    </section>
  );
};

export default Invoice;
