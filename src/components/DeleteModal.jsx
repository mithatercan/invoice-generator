import React, { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import "../scss/components/delete-modal.scss";
const DeleteModal = ({ isOpened }) => {
  const { invoice } = useContext(InvoiceContext);

  return (
    isOpened && (
      <div className='delete-modal'>
        <h3>Confirm Deletion</h3>
        <p>
          Are you sure you want to delete invoice {invoice && invoice.id} ? This action cannot be
          undone.
        </p>
        <div className='buttons display-flex jc-flex-end ai-center'>
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
