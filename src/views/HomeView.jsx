import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import InvoiceListHeader from "../components/InvoiceListHeader";
import InvoiceListItem from "../components/InvoiceListItem";
import "../scss/views/home.scss";

const HomeView = () => {
  const { data } = useContext(DataContext);
  return (
    <section className='home-view'>
      <InvoiceListHeader />
      {data && data.map((invoice) => <InvoiceListItem key={invoice.id} {...invoice} />)}
    </section>
  );
};

export default HomeView;
