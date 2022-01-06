import React from "react";
import "../scss/components/invoice-table.scss";
const InvoiceTable = () => {
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
  );
};

export default InvoiceTable;
