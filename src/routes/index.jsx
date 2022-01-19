import React from "react";
import Layout from "../components/Layout";
import HomeView from "../views/HomeView";
import InvoiceView from "../views/InvoiceView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const index = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/invoice/:id' element={<InvoiceView />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default index;
