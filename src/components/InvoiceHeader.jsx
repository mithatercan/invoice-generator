import React, { useContext } from "react";
import { IoChevronBackOutline } from "react-icons/all";
import { FormContext } from "../context/FormContext";
import { InvoiceContext } from "../context/InvoiceContext";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Status from "./Status";
import "../scss/components/invoice-header.scss";
import "../scss/components/invoice-header-buttons.scss";

const InvoiceHeader = () => {
  const navigate = useNavigate();
  const { invoice, setIsModalOpened, isModalOpened } = useContext(InvoiceContext);
  const { setData, toggleForm, setType } = useContext(FormContext);
  const { dispatch } = useContext(DataContext);

  const handleGoBack = () => {
    navigate("/");
  };

  const changeInvoiceStatus = () => {
    dispatch({ type: "edit", payload: { id: invoice.id, data: { status: "Paid" } } });
  };

  const deleteInvoice = () => {
    setIsModalOpened(!isModalOpened);
  };

  const editInvoice = () => {
    setData(invoice);
    setType("edit");
    toggleForm();
  };

  return (
    <header className='invoice-header display-flex fd-column'>
      <div className='invoice-header__top'>
        <button onClick={handleGoBack} className='go-back display-flex ai-center'>
          <IoChevronBackOutline /> Go back
        </button>
      </div>
      <div className='invoice-header__bottom display-flex jc-space-between ai-center'>
        <div className='invoice-header__bottom--left display-flex ai-center'>
          <span>Status</span>
          <Status status={invoice.status} />
        </div>
        <div className='invoice-header__bottom--right'>
          <button onClick={editInvoice} className='btn-edit'>
            Edit
          </button>
          <button onClick={deleteInvoice} className='btn-delete'>
            Delete
          </button>
          {invoice.status === "Pending" && (
            <button onClick={changeInvoiceStatus} className='btn-mark'>
              Mark as paid
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default InvoiceHeader;
