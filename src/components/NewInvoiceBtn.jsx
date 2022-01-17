import React, { useContext, useRef } from "react";
import { AiFillPlusCircle } from "react-icons/all";
import { InvoiceFormContext } from "../context/InvoiceFormContext";
import useOutsideClick from "../hooks/useOutsideClick";

const NewInvoiceBtn = () => {
  const { setIsOpened } = useContext(InvoiceFormContext);
  const formButtonRef = useRef(null);

  return (
    <button
      ref={formButtonRef}
      onClick={() => setIsOpened(true)}
      className='display-flex ai-center invoice-btn'
    >
      <AiFillPlusCircle />
      New Invoice
    </button>
  );
};

export default NewInvoiceBtn;
