import React, { useContext } from "react";
import { InvoiceFormContext } from "../context/InvoiceFormContext";
import "../scss/components/invoice-form.scss";

const InvoiceForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { isOpened } = useContext(InvoiceFormContext);

  return (
    <form className={isOpened && "opened"} onSubmit={handleSubmit}>
      <h1>Create Invoice</h1>
      <div className='form-fields'>
        <fieldset>
          <legend>Bill from</legend>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Street Address</label>
              <input type='text' name='sender.address' />
            </div>
          </div>
          <div className='field-group field-group-row display-flex jc-space-between'>
            <div className='input-wrap'>
              <label>City</label>
              <input type='text' name='sender.city' />
            </div>
            <div className='input-wrap'>
              <label>Post Code</label>
              <input type='text' name='sender.code' />
            </div>
            <div className='input-wrap'>
              <label>Country</label>
              <input type='text' name='sender.country' />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Bill To</legend>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Client's name</label>
              <input type='text' name='client.name' />
            </div>
          </div>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Client's Email</label>
              <input type='text' name='client.email' />
            </div>
          </div>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Street Address</label>
              <input type='text' name='client.address' />
            </div>
          </div>
          <div className='field-group field-group-row display-flex jc-space-between ai-center'>
            <div className='input-wrap'>
              <label>City</label>
              <input type='text' name='client.city' />
            </div>
            <div className='input-wrap'>
              <label>Post Code</label>
              <input type='text' name='client.code' />
            </div>
            <div className='input-wrap'>
              <label>Country</label>
              <input type='text' name='client.country' />
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
