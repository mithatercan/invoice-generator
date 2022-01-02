import { createContext, useState } from "react";

export const FilterModalContext = createContext();

export const FilterModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FilterModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};
