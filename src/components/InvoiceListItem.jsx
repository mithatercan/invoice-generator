import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/components/invoice-list-item.scss";
const InvoiceListItem = ({ id, date, customerName, amount, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const idWithoutHash = id.replace("#", "");
    navigate(`/invoice/${idWithoutHash}`);
  };

  return (
    <div onClick={handleClick} className='invoice-list-item display-flex jc-space-between'>
      <div className='display-flex jc-space-between'>
        {id}
        {date}
      </div>
      <div>{customerName}</div>
      <div>{amount}</div>
      <div>{status}</div>
    </div>
  );
};

export default InvoiceListItem;
