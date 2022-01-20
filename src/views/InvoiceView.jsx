import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Invoice from "../components/Invoice";
import "../scss/views/invoice.scss";
const InvoiceView = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);

  return (
    <section className='invoice-view'>
      <Invoice invoice={state.find((invoice) => invoice.id === id)} />
    </section>
  );
};

export default InvoiceView;
