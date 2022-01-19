import React from "react";
import { GoMarkGithub, FaFileInvoiceDollar } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import "../scss/components/sidebar.scss";
const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/");
  };
  return (
    <aside className='sidebar display-flex fd-column jc-space-between'>
      <div onClick={handleClick} className='logo'>
        <FaFileInvoiceDollar />
      </div>
      <main className='display-flex fd-column jc-space-between'></main>
      <footer>
        <a href='https://github.com/mithatercann/invoice-generator' target='_blank'>
          <GoMarkGithub />
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
