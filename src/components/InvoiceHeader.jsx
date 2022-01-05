import React from "react";
import "../scss/components/invoice-header.scss";
import { IoChevronBackOutline } from "react-icons/all";
import Status from "./Status";
import { useNavigate } from "react-router-dom";

const InvoiceHeader = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <header className='invoice-header display-flex fd-column ai-flex-start'>
      <button onClick={handleGoBack} className='go-back display-flex ai-center'>
        <IoChevronBackOutline /> Go back
      </button>
      <div className='invoice-header__bottom display-flex jc-space-between ai-center'>
        <div className='invoice-header__bottom--left display-flex ai-center'>
          <span>Status</span>
          <Status status={"Draft"} />
        </div>
        <div className='invoice-header__bottom--right'>
          <button className='btn-edit'>Edit</button>
          <button className='btn-delete'>Delete</button>
          <button className='btn-mark'>Mark as paid</button>
        </div>
      </div>
    </header>
  );
};

export default InvoiceHeader;
