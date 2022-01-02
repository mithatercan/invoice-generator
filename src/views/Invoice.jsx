import React from "react";
import { useParams } from "react-router-dom";
const Invoice = () => {
  const { id } = useParams();
  console.log(id);
  return <div>invoice {id}</div>;
};

export default Invoice;
