import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import formTemplate from "../formTemplate";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [data, setData] = useState(formTemplate);
  const [type, setType] = useState("");

  //toggle form
  const toggleForm = () => {
    if (isOpened) {
      // reset form before close the form
      setData(formTemplate);
      setType("");
    }
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  return (
    <FormContext.Provider
      value={{
        isOpened,
        toggleForm,
        data,
        setData,
        type,
        setType,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
