import React from "react";
import { useNavigate } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/all";
import "../scss/components/invoice-list-item.scss";
const InvoiceListItem = ({ id, date, customer, amount, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const idWithoutHash = id.replace("#", "");
    navigate(`/invoice/${idWithoutHash}`);
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
      <p className='invoice-list-item__date'>{date}</p>
      <p className='invoice-list-item__customer'>{customer}</p>
      <p className='invoice-list-item__amount'>{amount}</p>
      <div className='invoice-list-item__status pending display-flex ai-center'>
        <GoPrimitiveDot />
        {status}
      </div>
    </div>
  );
};

export default InvoiceListItem;
