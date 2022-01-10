import React from "react";
import calculateAmount from "../helpers/calculateAmount";
import "../scss/components/invoice-table.scss";
import getSymbolFromCurrency from "currency-symbol-map";

const InvoiceTable = ({ items, currency }) => {
  return (
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
        {items.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              {getSymbolFromCurrency(currency)}
              {item.price}
            </td>
            <td>
              {getSymbolFromCurrency(currency)}
              {item.price * item.quantity}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Amount due</th>
          <th></th>
          <th></th>
          <th>
            {getSymbolFromCurrency(currency)}
            {calculateAmount(items)}
          </th>
        </tr>
      </tfoot>
    </table>
  );
};

export default InvoiceTable;
