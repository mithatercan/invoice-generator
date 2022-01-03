import React from "react";
import { AiFillPlusCircle } from "react-icons/all";

const NewInvoiceBtn = () => {
  return (
    <button className='display-flex ai-center invoice-btn'>
      <AiFillPlusCircle />
      New Invoice
    </button>
  );
};

export default NewInvoiceBtn;
