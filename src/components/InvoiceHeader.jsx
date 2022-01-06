import React, { useContext } from "react";
import "../scss/components/invoice-header.scss";
import "../scss/components/invoice-header-btns.scss";
import Status from "./Status";
import { InvoiceContext } from "../context/InvoiceContext";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline, AiOutlineCloudDownload } from "react-icons/all";

const InvoiceHeader = () => {
  const navigate = useNavigate();
  const { downloadInvoice } = useContext(InvoiceContext);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <header className='invoice-header display-flex fd-column  '>
      <div className='invoice-header__top display-flex ai-center jc-space-between'>
        <button onClick={handleGoBack} className='go-back display-flex ai-center'>
          <IoChevronBackOutline /> Go back
        </button>
        <AiOutlineCloudDownload onClick={downloadInvoice} className='download' />
      </div>
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
