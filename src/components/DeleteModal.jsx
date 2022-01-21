import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { InvoiceContext } from "../context/InvoiceContext";
import useOutsideClick from "../hooks/useOutsideClick";
import "../scss/components/delete-modal.scss";
const DeleteModal = () => {
  const { invoice, isModalOpened, setIsModalOpened } = useContext(InvoiceContext);
  const { dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  const modal = useRef();

  useOutsideClick(modal, () => {
    if (isModalOpened) setIsModalOpened(false);
  });

  const handleDelete = () => {
    dispatch({ type: "delete", payload: invoice.id });
    navigate("/");
    setIsModalOpened(false);
  };

  return (
    isModalOpened && (
      <div className='modal-container '>
        <div ref={modal} className='delete-modal'>
          <h3>Confirm Deletion</h3>
          <p>
            Are you sure you want to delete invoice {invoice && invoice.id}? This action cannot be
            undone.
          </p>
          <div className='buttons display-flex jc-flex-end ai-center'>
            <button onClick={() => setIsModalOpened(!isModalOpened)}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
