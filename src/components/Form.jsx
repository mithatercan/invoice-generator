import React, { useContext, useRef } from "react";
import FormButtons from "./FormButtons";
import { FiTrash2 } from "react-icons/all";
import useOutsideClick from "../hooks/useOutsideClick";
import generateUID from "../helpers/generateUID";
import { FormContext } from "../context/FormContext";
import "../scss/components/invoice-form.scss";

const Form = () => {
  const formRef = useRef(null);
  const { isOpened, toggleForm, type, data, setData } = useContext(FormContext);

  useOutsideClick(formRef, () => {
    if (isOpened) {
      toggleForm();
    }
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    setData({
      ...data,
      items: [
        ...data.items,
        {
          id: generateUID(),
          name: "",
          quantity: "",
          price: "",
          total: "",
        },
      ],
    });
  };

  return (
    <form ref={formRef} className={isOpened ? "opened" : undefined}>
      <h1>{type === "edit" ? `${data.id} Edit invoice` : "Create Invoice"}</h1>
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
                value={data.clientEmail}
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
        <fieldset>
          <legend>Invoice Items</legend>
          {data.items.map((item, index) => (
            <div className='display-flex ai-center field-group-row'>
              <div className='input-wrap'>
                <label>Item Name</label>
                <input
                  type='text'
                  value={item.name}
                  onChange={(e) =>
                    setData({
                      ...data,
                      items: data.items.map((a) =>
                        item.id === a.id ? { ...a, name: e.target.value } : a
                      ),
                    })
                  }
                />
              </div>
              <div className='input-wrap'>
                <label>Qty.</label>
                <input
                  type='number'
                  value={item.quantity}
                  onChange={(e) =>
                    setData({
                      ...data,
                      items: data.items.map((a) =>
                        a.id === item.id ? { ...a, quantity: e.target.value } : a
                      ),
                    })
                  }
                />
              </div>
              <div className='input-wrap'>
                <label>Price</label>
                <input
                  type='number'
                  value={item.price}
                  onChange={(e) =>
                    setData({
                      ...data,
                      items: data.items.map((a, b) =>
                        a.id === item.id ? { ...a, price: e.target.value } : a
                      ),
                    })
                  }
                />
              </div>

              <div className='input-wrap'>
                <label>Action</label>
                <button
                  type='button'
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setData({
                      ...data,
                      items: data.items.filter((a) => a.id !== item.id),
                    });
                  }}
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          <button className='item' onClick={handleAddItem}>
            Add new item
          </button>
        </fieldset>
      </div>

      <FormButtons />
    </form>
  );
};

export default Form;
