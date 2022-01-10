import React, { useContext } from "react";
import { GoMarkGithub, FaFileInvoiceDollar } from "react-icons/all";
import { InvoiceFormContext } from "../context/InvoiceFormContext";
import InvoiceForm from "./InvoiceForm";
import "../scss/components/sidebar.scss";
const Sidebar = () => {
  const { isOpened, setIsOpened } = useContext(InvoiceFormContext);
  return (
    <aside className='sidebar display-flex fd-column jc-space-between'>
      <div className='logo'>
        <FaFileInvoiceDollar />
      </div>

      <main className='display-flex fd-column jc-space-between'>
        <div className='form-wrapper'>
          <InvoiceForm />
        </div>
        <div
          onClick={() => setIsOpened(false)}
          className={`${isOpened && "opened"} back-drop`}
        ></div>
      </main>

      <footer>
        <GoMarkGithub />
      </footer>
    </aside>
  );
};

export default Sidebar;
