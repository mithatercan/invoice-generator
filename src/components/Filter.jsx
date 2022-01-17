import React, { useContext, useRef } from "react";
import { FilterModalContext } from "../context/FilterModalContext";
import { FiChevronDown, FiChevronUp } from "react-icons/all";
import FilterOption from "./FilterOption";
import useOutsideClick from "../hooks/useOutsideClick";
import "../scss/components/filter.scss";
const Filter = () => {
  const types = ["Paid", "Pending", "Draft"];

  const filterRef = useRef(null);
  const filterContext = useContext(FilterModalContext);

  const { isOpened, setIsOpened } = filterContext;
  const { filter, setFilter } = filterContext;

  useOutsideClick(filterRef, () => {
    setIsOpened(false);
  });

  return (
    <div ref={filterRef} className='filter-dropdown'>
      <button
        className='filter-dropdown__btn display-flex ai-center'
        onClick={() => setIsOpened(!isOpened)}
      >
        Filter by status {isOpened ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div className={`filter-dropdown__options ${isOpened && "opened"}`}>
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
