import React from "react";
import InvoiceListHeader from "../components/InvoiceListHeader";
import InvoiceListItem from "../components/InvoiceListItem";
const Home = () => {
  const invoiceArr = [
    {
      id: "UB0298",
      date: "12/12/2019",
      customer: "John Doe",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "RG0314",
      date: "12/12/2019",
      customer: "John Doe",
      amount: "$100",
      status: "Paid",
    },
    {
      id: "XA1449",
      date: "12/12/2019",
      customer: "John Doe",
      amount: "$100",
      status: "Paid",
    },
  ];
  return (
    <section className='home-view'>
      <InvoiceListHeader />
      {invoiceArr.map((invoice) => (
        <InvoiceListItem key={invoice.id} {...invoice} />
      ))}
    </section>
  );
};

export default Home;
