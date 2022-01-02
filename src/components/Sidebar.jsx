import React from "react";
import { GoMarkGithub, BsFillMoonFill, FaFileInvoiceDollar } from "react-icons/all";
import "../scss/components/sidebar.scss";
const Sidebar = () => {
  return (
    <div className='sidebar display-flex fd-column jc-space-between'>
      <main className='display-flex fd-column jc-space-between'>
        <div className='logo'>
          <FaFileInvoiceDollar />
        </div>
        <button>{<BsFillMoonFill />}</button>
      </main>
      <footer>
        <GoMarkGithub />
      </footer>
    </div>
  );
};

export default Sidebar;
