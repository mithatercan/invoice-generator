import React from "react";
import { useParams } from "react-router-dom";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceCard from "../components/InvoiceCard";
const Invoice = () => {
  const { id } = useParams();
  return (
    <section className='invoice-view'>
      <InvoiceHeader />
      <InvoiceCard />
    </section>
  );
};

export default Invoice;
