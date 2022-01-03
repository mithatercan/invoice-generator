import React from "react";

const FilterOption = ({ type, handleChange, checked }) => {
  return (
    <label className='display-flex ai-center'>
      <input onChange={handleChange} type='checkbox' checked={checked} />
      <span>{type}</span>
    </label>
  );
};

export default FilterOption;
