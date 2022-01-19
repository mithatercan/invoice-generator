import React, { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/all";
import { FormContext } from "../context/FormContext";

const NewInvoiceBtn = () => {
  const { toggleForm } = useContext(FormContext);

  const handleClick = () => {
    toggleForm();
  };

  return (
    <button onClick={handleClick} className='display-flex ai-center invoice-btn'>
      <AiFillPlusCircle />
      New Invoice
    </button>
  );
};

export default NewInvoiceBtn;
