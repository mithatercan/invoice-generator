import React from "react";
import "../scss/components/invoice-form.scss";
const InvoiceForm = () => {
  return (
    <form>
      <h1>Create Invoice</h1>
      <fieldset>
        <legend>Bill from</legend>
        <div className='field-group '>
          <div className='input-wrap'>
            <label>Street Address</label>
            <input type='text' />
          </div>
        </div>
        <div className='field-group field-group-row display-flex jc-space-between'>
          <div className='input-wrap'>
            <label>City</label>
            <input type='text' />
          </div>
          <div className='input-wrap'>
            <label>Post Code</label>
            <input type='text' />
          </div>
          <div className='input-wrap'>
            <label>Country</label>
            <input type='text' />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Bill To</legend>
        <div className='field-group '>
          <div className='input-wrap'>
            <label>Client's name</label>
            <input type='text' />
          </div>
        </div>
        <div className='field-group '>
          <div className='input-wrap'>
            <label>Client's Email</label>
            <input type='text' />
          </div>
        </div>
        <div className='field-group '>
          <div className='input-wrap'>
            <label>Street Address</label>
            <input type='text' />
          </div>
        </div>
        <div className='field-group field-group-row display-flex jc-space-between ai-center'>
          <div className='input-wrap'>
            <label>City</label>
            <input type='text' />
          </div>
          <div className='input-wrap'>
            <label>Post Code</label>
            <input type='text' />
          </div>
          <div className='input-wrap'>
            <label>Country</label>
            <input type='text' />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className='field-group field-group-row display-flex ai-center jc-space-between'>
          <div className='input-wrap'>
            <label>Invoice Date</label>
            <input type='date' name='' id='' />
          </div>
          <div className='input-wrap'>
            <label>Payment Due</label>
            <input type='date' name='' id='' />
          </div>
        </div>
        <div className='field-group'>
          <div className='input-wrap'>
            <label>Description</label>
            <input type='text' name='' id='' />
          </div>
        </div>
      </fieldset>

      <fieldset></fieldset>
      <div className='form-buttons display-flex jc-space-between ai-center'>
        <button className='discard'>Discard</button>
        <div>
          <button className='save-as-draft'>Save as draft</button>
          <button className='save-and-send'>Save and Send</button>
        </div>
      </div>
    </form>
  );
};

export default InvoiceForm;
