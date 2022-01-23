import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import DeleteModal from "./DeleteModal";
import Sidebar from "./Sidebar";
import Form from "./Form";
import "../scss/components/layout.scss";

const Layout = ({ children }) => {
  const { isOpened } = useContext(FormContext);

  return (
    <div className='layout display-flex'>
      <DeleteModal />
      <Sidebar />
      <main>
        {children}
        <Form />
        <div className={`back-drop ${isOpened && "opened"}`}></div>
      </main>
    </div>
  );
};

export default Layout;
