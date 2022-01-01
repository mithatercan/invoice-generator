import React from "react";
import InvoiceListHeader from "../components/InvoiceListHeader";
import InvoiceListItem from "../components/InvoiceListItem";
const Home = () => {
  const invoiceArr = [
    {
      id: "#324XASD",
      date: "12/12/2019",
      customerName: "John Doe",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "#324XASD",
      date: "12/12/2019",
      customerName: "John Doe",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "#324XASD",
      date: "12/12/2019",
      customerName: "John Doe",
      amount: "$100",
      status: "Paid",
    },
  ];
  return (
    <div>
      <InvoiceListHeader />
      {invoiceArr.map((invoice) => (
        <InvoiceListItem key={invoice.id} {...invoice} />
      ))}
    </div>
  );
};

export default Home;
