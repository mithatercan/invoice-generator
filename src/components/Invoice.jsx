import React from "react";
import formatDate from "../helpers/formatDate";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceTable from "./InvoiceTable";
import "../scss/components/invoice.scss";

const Invoice = ({ invoice }) => {
  return invoice ? (
    <div>
      <InvoiceHeader invoice={invoice} />
      <div className='invoice-card'>
        <header className='display-flex jc-space-between'>
          <div>
            <span>#{invoice.id}</span>
            <small>{invoice.description}</small>
          </div>
          <InvoiceAddress {...invoice.senderAddress} />
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
              <InvoiceAddress {...invoice.clientAddress} />
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

export default Invoice;
