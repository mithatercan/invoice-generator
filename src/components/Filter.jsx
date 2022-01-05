import React, { useContext, useEffect } from "react";
import { FilterModalContext } from "../context/FilterModalContext";
import { FiChevronDown, FiChevronUp } from "react-icons/all";
import "../scss/components/filter.scss";
import FilterOption from "./FilterOption";
const Filter = () => {
  const filterContext = useContext(FilterModalContext);
  const { isOpen, setIsOpen } = filterContext;
  const { filter, setFilter } = filterContext;
  const types = ["Paid", "Pending", "Draft"];

  return (
    <div className='filter-dropdown'>
      <button
        className='filter-dropdown__btn display-flex ai-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter by status {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div className={`filter-dropdown__options ${isOpen && "opened"}`}>
        {types.map((type, idx) => (
          <FilterOption
            key={idx}
            type={type}
            handleChange={() => setFilter(filter === type ? "" : type)}
            checked={filter === type}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
