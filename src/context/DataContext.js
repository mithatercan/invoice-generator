import { createContext, useEffect, useReducer, useState } from "react";
import dataReducer from "../reducers/dataReducer";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, []);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter) {
      setData(state.filter((item) => item.status === filter));
    } else {
      setData(state);
    }

    if (state.length === 0) {
      dispatch({ type: "load" });
    }
  }, [filter, state]);

  return (
    <DataContext.Provider value={{ dispatch, state, data, setFilter, filter }}>
      {children}
    </DataContext.Provider>
  );
};
