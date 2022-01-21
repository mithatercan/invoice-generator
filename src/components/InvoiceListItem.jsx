import React from "react";
import { useNavigate } from "react-router-dom";
import getSymbolFromCurrency from "currency-symbol-map";
import Status from "./Status";
import calculateAmount from "../helpers/calculateAmount";
import "../scss/components/invoice-list-item.scss";

const InvoiceListItem = ({ id, invoiceDate, clientName, items, status, currency }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/invoice/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='invoice-list-item display-flex ai-center jc-space-between'
    >
      <div className='invoice-list-item__id'>
        <span>#</span>
        {id}
      </div>
      <p className='invoice-list-item__date'>{invoiceDate}</p>
      <p className='invoice-list-item__customer'>{clientName}</p>
      <p className='invoice-list-item__amount'>
        {getSymbolFromCurrency(currency)}
        {calculateAmount(items)}
      </p>
      <Status status={status} />
    </div>
  );
};

export default InvoiceListItem;
