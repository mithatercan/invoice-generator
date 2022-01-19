import { createContext, useEffect, useReducer, useState } from "react";
import dataReducer from "../reducers/dataReducer";
import initialData from "../initialData";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialData);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter) {
      setData(state.filter((item) => item.status === filter));
    } else {
      setData(state);
    }
  }, [filter, state]);

  useEffect(() => {
    dispatch({ type: "load" });
  }, []);

  return (
    <DataContext.Provider value={{ dispatch, state, data, setFilter, filter }}>
      {children}
    </DataContext.Provider>
  );
};
