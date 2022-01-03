import { createContext, useState } from "react";

export const FilterModalContext = createContext();

export const FilterModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  return (
    <FilterModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        filter,
        setFilter,
      }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};
