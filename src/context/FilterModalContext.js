import { createContext, useEffect, useState } from "react";

export const FilterModalContext = createContext();

export const FilterModalProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [ref, setRef] = useState();
  const [filter, setFilter] = useState("");

  const closeModal = (e) => {
    if (isOpened && !ref.current.contains(e.target)) setIsOpened(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", closeModal);
    return window.addEventListener("mousedown", closeModal);
  }, [isOpened]);

  return (
    <FilterModalContext.Provider
      value={{
        filter,
        setFilter,
        setIsOpened,
        isOpened,
        ref,
        setRef,
      }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};
