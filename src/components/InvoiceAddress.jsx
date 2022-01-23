import React from "react";

const InvoiceAddress = ({ street, city, postCode, country }) => {
  return (
    <address>
      <small> {street}</small>
      <small>{city}</small>
      <small>{postCode}</small>
      <small>{country}</small>
    </address>
  );
};

export default InvoiceAddress;
