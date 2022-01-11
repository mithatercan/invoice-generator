import { createContext, useState } from "react";

export const FilterModalContext = createContext();

export const FilterModalProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [filter, setFilter] = useState("");
  return (
    <FilterModalContext.Provider
      value={{
        filter,
        setFilter,
        setIsOpened,
        isOpened,
      }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};
