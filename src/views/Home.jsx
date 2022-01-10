import React, { useContext } from "react";
import { FilterModalContext } from "../context/FilterModalContext";
import InvoiceListHeader from "../components/InvoiceListHeader";
import InvoiceListItem from "../components/InvoiceListItem";
import data from "../data";
import "../scss/views/home.scss";
const Home = () => {
  const { filter } = useContext(FilterModalContext);
  return (
    <section className='home-view'>
      <InvoiceListHeader />
      {filter
        ? data.map(
            (invoice) =>
              filter === invoice.status && <InvoiceListItem key={invoice.id} {...invoice} />
          )
        : data.map((invoice) => <InvoiceListItem key={invoice.id} {...invoice} />)}
    </section>
  );
};

export default Home;
