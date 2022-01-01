import React from "react";
import Home from "../views/Home";
import Invoice from "../views/Invoice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/invoice/:id' element={<Invoice />} />
      </Routes>
    </Router>
  );
};

export default index;
