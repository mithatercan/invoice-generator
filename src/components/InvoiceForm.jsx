import React, { useContext } from "react";
import { InvoiceFormContext } from "../context/InvoiceFormContext";
import "../scss/components/invoice-form.scss";

const InvoiceForm = () => {
  const { isOpened } = useContext(InvoiceFormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allInputs = e.target;
    const formData = new FormData(allInputs);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form className={isOpened && "opened"} onSubmit={handleSubmit}>
      <h1>Create Invoice</h1>
      <div className='form-fields'>
        <fieldset>
          <legend>Bill from</legend>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Street Address</label>
              <input type='text' name='address' />
            </div>
          </div>
          <div className='field-group field-group-row display-flex jc-space-between'>
            <div className='input-wrap'>
              <label>City</label>
              <input type='text' name='city[sender]' />
            </div>
            <div className='input-wrap'>
              <label>Post Code</label>
              <input type='text' name='postCode[sender]' />
            </div>
            <div className='input-wrap'>
              <label>Country</label>
              <input type='text' name='country[sender]' />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Bill To</legend>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Client's name</label>
              <input type='text' name='name[client]' />
            </div>
          </div>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Client's Email</label>
              <input type='text' name='email[client]' />
            </div>
          </div>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Street Address</label>
              <input type='text' name='address[client]' />
            </div>
          </div>
          <div className='field-group field-group-row display-flex jc-space-between ai-center'>
            <div className='input-wrap'>
              <label>City</label>
              <input type='text' name='city[client]' />
            </div>
            <div className='input-wrap'>
              <label>Post Code</label>
              <input type='text' name='postCode[client]' />
            </div>
            <div className='input-wrap'>
              <label>Country</label>
              <input type='text' name='country[client]' />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className='field-group field-group-row display-flex ai-center jc-space-between fw-wrap'>
            <div className='input-wrap'>
              <label>Invoice Date</label>
              <input type='date' name='invoice-date' />
            </div>
            <div className='input-wrap'>
              <label>Payment Due</label>
              <input type='date' name='payment-date' />
            </div>
          </div>
          <div className='field-group'>
            <div className='input-wrap'>
              <label>Description</label>
              <input type='text' name='description' />
            </div>
          </div>
        </fieldset>
      </div>

      <div className='form-buttons display-flex jc-space-between ai-center'>
        <button className='discard'>Discard</button>
        <div>
          <button className='draft'>Save as draft</button>
          <button className='save'>Save & Send</button>
        </div>
      </div>
    </form>
  );
};

export default InvoiceForm;
