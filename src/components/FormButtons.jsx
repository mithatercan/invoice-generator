import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { DataContext } from "../context/DataContext";
const FormButtons = () => {
  const { toggleForm, type, data } = useContext(FormContext);
  const { dispatch } = useContext(DataContext);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { ...data, status: "Pending" } });
    toggleForm();
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id: data.id, data: { ...data } } });
    toggleForm();
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    toggleForm();
  };

  const handleDraft = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { ...data, status: "Draft" } });
    toggleForm();
  };

  return (
    <div className='form-buttons display-flex jc-space-between ai-center'>
      <button onClick={handleDiscard} className='discard'>
        Discard
      </button>

      {type === "edit" ? (
        <button onClick={handleSaveChanges} className='save'>
          Save Changes
        </button>
      ) : (
        <div>
          <button onClick={handleDraft} className='draft'>
            Save as draft
          </button>
          <button onClick={handleSave} className='save'>
            Save & Send
          </button>
        </div>
      )}
    </div>
  );
};

export default FormButtons;
