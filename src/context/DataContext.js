import { createContext, useEffect, useReducer } from "react";
import dataReducer from "../reducers/dataReducer";
import data from "../data";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, data);

  useEffect(() => {
    dispatch({ type: "load" });
  }, []);

  return <DataContext.Provider value={{ dispatch, state }}>{children}</DataContext.Provider>;
};
