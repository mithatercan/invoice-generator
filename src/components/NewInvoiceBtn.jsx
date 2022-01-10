import React, { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/all";
import { InvoiceFormContext } from "../context/InvoiceFormContext";

const NewInvoiceBtn = () => {
  const { setIsOpened } = useContext(InvoiceFormContext);
  return (
    <button onClick={() => setIsOpened(true)} className='display-flex ai-center invoice-btn'>
      <AiFillPlusCircle />
      New Invoice
    </button>
  );
};

export default NewInvoiceBtn;
