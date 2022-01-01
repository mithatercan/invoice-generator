import React from "react";
import Sidebar from "./Sidebar";
import "../scss/components/layout.scss";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <main>
        <section>{children}</section>
      </main>
    </div>
  );
};

export default Layout;
