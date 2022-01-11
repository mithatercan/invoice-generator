import React, { useContext } from "react";
import { FilterModalContext } from "../context/FilterModalContext";
import { DataContext } from "../context/DataContext";
import InvoiceListHeader from "../components/InvoiceListHeader";
import InvoiceListItem from "../components/InvoiceListItem";
import data from "../data";
import "../scss/views/home.scss";
const Home = () => {
  const { state } = useContext(DataContext);
  const { filter } = useContext(FilterModalContext);
  return (
    <section className='home-view'>
      <InvoiceListHeader />
      {filter
        ? state.map(
            (invoice) =>
              filter === invoice.status && <InvoiceListItem key={invoice.id} {...invoice} />
          )
        : state.map((invoice) => <InvoiceListItem key={invoice.id} {...invoice} />)}
    </section>
  );
};

export default Home;
