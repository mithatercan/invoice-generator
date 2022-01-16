import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import InvoiceCard from "../components/InvoiceCard";
import { DataContext } from "../context/DataContext";
import "../scss/views/invoice.scss";
const Invoice = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);

  console.log(state.find((invoice) => invoice.id === id));
  return (
    <section className='invoice-view'>
      <InvoiceCard invoice={state.find((invoice) => invoice.id === id)} />
    </section>
  );
};

export default Invoice;
