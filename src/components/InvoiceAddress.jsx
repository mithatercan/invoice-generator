import React from "react";

const InvoiceAddress = ({ street, city, postCode, country }) => {
  return (
    <address>
      <small>
        {street}
        <br />
        {city}
        <br />
        {postCode}
        <br />
        {country}
      </small>
    </address>
  );
};

export default InvoiceAddress;
