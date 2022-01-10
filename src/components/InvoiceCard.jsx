import React, { useContext, useEffect, useRef } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceTable from "./InvoiceTable";
import Address from "./Address";
import "../scss/components/invoice.scss";
import formatDate from "../helpers/formatDate";
import InvoiceHeader from "./InvoiceHeader";
const InvoiceCard = () => {
  const invoiceRef = useRef();
  const { setComponent, invoice } = useContext(InvoiceContext);

  useEffect(() => {
    setComponent(invoiceRef.current);
  }, []);

  return invoice ? (
    <div>
      <InvoiceHeader status={invoice.status} />
      <div ref={invoiceRef} className='invoice-card'>
        <header className='display-flex jc-space-between'>
          <div>
            <span>#{invoice.id}</span>
            <small>{invoice.description}</small>
          </div>
          <Address {...invoice.senderAddress} />
        </header>
        <main className='display-flex jc-space-between'>
          <div className='invoice-left display-flex jc-space-between fd-column'>
            <div className='invoice-left__top'>
              <small>Invoice Date</small>
              <span>{formatDate(invoice.invoiceDate)}</span>
            </div>
            <div className='invoice-left__bottom'>
              <small>Payment Due</small>
              <span>{formatDate(invoice.paymentDue)}</span>
            </div>
          </div>
          <div className='invoice-mid display-flex fd-column jc-space-between'>
            <small>Bill To</small>
            <div>
              <span>{invoice.clientName}</span>
              <Address {...invoice.clientAddress} />
            </div>
          </div>
          <div className='invoice-right'>
            <small>Sent to</small>
            <span>{invoice.clientEmail}</span>
          </div>
        </main>
        <InvoiceTable currency={invoice.currency} items={invoice.items} />
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default InvoiceCard;
