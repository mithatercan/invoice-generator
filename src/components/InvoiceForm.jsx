import React, { useContext, useRef, useEffect } from "react";
import { InvoiceFormContext } from "../context/InvoiceFormContext";
import { DataContext } from "../context/DataContext";
import useOutsideClick from "../hooks/useOutsideClick";
import "../scss/components/invoice-form.scss";

const InvoiceForm = () => {
  const formRef = useRef(null);
  const { isOpened, setIsOpened } = useContext(InvoiceFormContext);
  const { data, setData } = useContext(InvoiceFormContext);
  const { dispatch } = useContext(DataContext);

  useOutsideClick(formRef, () => {
    if (isOpened) {
      console.log(true);
    }
  });

  const handleSave = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { ...data, status: "Pending" } });
    setIsOpened(false);
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    setIsOpened(false);
  };

  const handleDraft = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { ...data, status: "Draft" } });
    setIsOpened(false);
  };

  return (
    <form ref={formRef} className={isOpened ? "opened" : undefined}>
      <h1>Create Invoice</h1>
      <div className='form-fields'>
        <fieldset>
          <legend>Bill from</legend>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Street Address</label>
              <input
                type='text'
                value={data.senderAddress.street}
                onChange={(e) =>
                  setData({
                    ...data,
                    senderAddress: { ...data.senderAddress, street: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <div className='field-group field-group-row display-flex jc-space-between'>
            <div className='input-wrap'>
              <label>City</label>
              <input
                type='text'
                value={data.senderAddress.city}
                onChange={(e) =>
                  setData({
                    ...data,
                    senderAddress: { ...data.senderAddress, city: e.target.value },
                  })
                }
              />
            </div>
            <div className='input-wrap'>
              <label>Post Code</label>
              <input
                type='text'
                value={data.senderAddress.postCode}
                onChange={(e) =>
                  setData({
                    ...data,
                    senderAddress: { ...data.senderAddress, postCode: e.target.value },
                  })
                }
              />
            </div>
            <div className='input-wrap'>
              <label>Country</label>
              <input
                type='text'
                value={data.senderAddress.country}
                onChange={(e) =>
                  setData({
                    ...data,
                    senderAddress: { ...data.senderAddress, country: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Bill To</legend>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Client's name</label>
              <input
                type='text'
                value={data.clientName}
                onChange={(e) => setData({ ...data, clientName: e.target.value })}
              />
            </div>
          </div>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Client's Email</label>
              <input
                type='text'
                value={data.senderAddress.clientEmail}
                onChange={(e) => setData({ ...data, clientEmail: e.target.value })}
              />
            </div>
          </div>
          <div className='field-group '>
            <div className='input-wrap'>
              <label>Street Address</label>
              <input
                type='text'
                value={data.clientAddress.street}
                onChange={(e) =>
                  setData({
                    ...data,

                    clientAddress: { ...data.clientAddress, street: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <div className='field-group field-group-row display-flex jc-space-between ai-center'>
            <div className='input-wrap'>
              <label>City</label>
              <input
                type='text'
                value={data.clientAddress.city}
                onChange={(e) =>
                  setData({
                    ...data,
                    clientAddress: { ...data.clientAddress, city: e.target.value },
                  })
                }
              />
            </div>
            <div className='input-wrap'>
              <label>Post Code</label>
              <input
                type='text'
                value={data.clientAddress.postCode}
                onChange={(e) =>
                  setData({
                    ...data,
                    clientAddress: { ...data.clientAddress, postCode: e.target.value },
                  })
                }
              />
            </div>
            <div className='input-wrap'>
              <label>Country</label>
              <input
                type='text'
                value={data.clientAddress.country}
                onChange={(e) =>
                  setData({
                    ...data,
                    clientAddress: { ...data.clientAddress, country: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className='field-group field-group-row display-flex ai-center jc-space-between fw-wrap'>
            <div className='input-wrap'>
              <label>Invoice Date</label>
              <input
                type='date'
                value={data.invoiceDate}
                onChange={(e) =>
                  setData({
                    ...data,
                    invoiceDate: e.target.value,
                  })
                }
              />
            </div>
            <div className='input-wrap'>
              <label>Payment Due</label>
              <input
                type='date'
                value={data.paymentDue}
                onChange={(e) =>
                  setData({
                    ...data,
                    paymentDue: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className='field-group'>
            <div className='input-wrap'>
              <label>Description</label>
              <input
                type='text'
                value={data.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div className='form-buttons display-flex jc-space-between ai-center'>
        <button onClick={handleDiscard} className='discard'>
          Discard
        </button>
        <div>
          <button onClick={handleDraft} className='draft'>
            Save as draft
          </button>
          <button onClick={handleSave} className='save'>
            Save & Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default InvoiceForm;
