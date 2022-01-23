import React, { useContext, createRef } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import formatDate from "../helpers/formatDate";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceTable from "./InvoiceTable";
import "../scss/components/invoice.scss";

const Invoice = () => {
  const { invoice } = useContext(InvoiceContext);
  const invoiceRef = createRef();

  const {
    id,
    description,
    senderAddress,
    clientAddress,
    invoiceDate,
    paymentDue,
    clientEmail,
    clientName,
    currency,
    items,
  } = invoice;

  return (
    <div className='invoice-container'>
      <InvoiceHeader />
      <div className='invoice-card' ref={invoiceRef}>
        <header className='display-flex jc-space-between'>
          <div>
            <span>#{id}</span>
            <small>{description}</small>
          </div>
          <InvoiceAddress {...senderAddress} />
        </header>
        <main className='display-flex jc-space-between fw-wrap'>
          <div className='invoice-left display-flex jc-space-between fd-column'>
            <div className='invoice-left__top'>
              <small>Invoice Date</small>
              <span>{formatDate(invoiceDate)}</span>
            </div>
            <div className='invoice-left__bottom'>
              <small>Payment Due</small>
              <span>{formatDate(paymentDue)}</span>
            </div>
          </div>
          <div className='invoice-mid display-flex fd-column jc-space-between'>
            <small>Bill To</small>
            <div>
              <span>{clientName}</span>
              <InvoiceAddress {...clientAddress} />
            </div>
          </div>
          <div className='invoice-right'>
            <small>Sent to</small>
            <span>{clientEmail}</span>
          </div>
        </main>
        <InvoiceTable currency={currency} items={items} />
      </div>
    </div>
  );
};

export default Invoice;
