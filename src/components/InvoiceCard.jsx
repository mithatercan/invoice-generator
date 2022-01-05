import React from "react";
import "../scss/components/invoice.scss";
const InvoiceCard = ({ id }) => {
  return (
    <div className='invoice'>
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
          <div>
            <small>Bill To</small>
            <span>Thomas Wayne</span>
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
        </div>
        <div className='invoice-right'>
          <small>Sent to</small>
          <span>contact@mithatercan.com</span>
        </div>
      </main>
      <table>
        <thead>
          <tr>
            <th>Item name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web design</td>
            <td>1</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Amount due</th>
            <th></th>
            <th></th>
            <th>$100</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoiceCard;
