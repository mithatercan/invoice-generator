import React, { useContext, useEffect, useRef } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import "../scss/components/invoice.scss";
import InvoiceTable from "./InvoiceTable";
const InvoiceCard = ({ id }) => {
  const invoiceRef = useRef();
  const { setComponent } = useContext(InvoiceContext);
  useEffect(() => {
    setComponent(invoiceRef.current);
    console.log(invoiceRef.current);
  }, []);
  return (
    <div ref={invoiceRef} className='invoice-card'>
      <header className='display-flex jc-space-between'>
        <div>
          <span>#TY9141</span>
          <small>Landing Page Design</small>
        </div>
        <address>
          <small>
            19 Union Terrace
            <br />
            London
            <br />
            E1 3EZ
            <br />
            United Kingdom
          </small>
        </address>
      </header>
      <main className='display-flex jc-space-between'>
        <div className='invoice-left display-flex jc-space-between fd-column'>
          <div className='invoice-left__top'>
            <small> Invoice Date</small>
            <span>01 Oct 2021</span>
          </div>
          <div className='invoice-left__bottom'>
            <small>Payment Due</small>
            <span>31 Oct 2021</span>
          </div>
        </div>
        <div className='invoice-mid display-flex fd-column jc-space-between'>
          <small>Bill To</small>
          <div>
            <span>Thomas Wayne</span>
            <address>
              <small>
                19 Union Terrace
                <br />
                London
                <br />
                E1 3EZ
                <br />
                United Kingdom
              </small>
            </address>
          </div>
        </div>
        <div className='invoice-right'>
          <small>Sent to</small>
          <span>thomas@dc.com</span>
        </div>
      </main>
      <InvoiceTable />
    </div>
  );
};

export default InvoiceCard;
