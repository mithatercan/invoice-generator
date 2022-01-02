import React, { useContext } from "react";
import { FilterModalContext } from "../context/FilterModalContext";
import { FiChevronDown, FiChevronUp } from "react-icons/all";
import "../scss/components/filter.scss";
const Filter = () => {
  const { isOpen, setIsOpen } = useContext(FilterModalContext);
  return (
    <div className='filter'>
      <button className='display-flex ai-center' onClick={() => setIsOpen(!isOpen)}>
        Filter by status {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div className={`filter-options ${isOpen && "opened"}`}>
        <label className='display-flex ai-center'>
          <input type='checkbox' />
          <span>Paid</span>
        </label>
        <label className='display-flex ai-center'>
          <input type='checkbox' />
          <span>Paid</span>
        </label>
        <label className='display-flex ai-center'>
          <input type='checkbox' />
          <span>Paid</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
