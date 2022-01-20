import React, { useContext } from "react";
import Status from "./Status";
import { FormContext } from "../context/FormContext";
import { InvoiceContext } from "../context/InvoiceContext";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline, AiOutlineCloudDownload } from "react-icons/all";
import "../scss/components/invoice-header.scss";
import "../scss/components/invoice-header-btns.scss";
import DeleteModal from "./DeleteModal";

const InvoiceHeader = ({ invoice }) => {
  const navigate = useNavigate();
  const { downloadInvoice, isModalOpened, setIsModalOpened } = useContext(InvoiceContext);
  const { setData, toggleForm, setType } = useContext(FormContext);
  const { dispatch } = useContext(DataContext);

  const handleGoBack = () => {
    navigate(-1);
  };

  const changeInvoiceStatus = () => {
    dispatch({ type: "edit", payload: { id: invoice.id, data: { status: "Paid" } } });
  };

  const deleteInvoice = () => {
    dispatch({ type: "delete", payload: invoice.id });
    handleGoBack();
    // setIsModalOpened(!isModalOpened);
  };

  const editInvoice = () => {
    setData(invoice);
    setType("edit");
    toggleForm();
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

      <DeleteModal isOpened={isModalOpened} />
    </header>
  );
};

export default InvoiceHeader;
