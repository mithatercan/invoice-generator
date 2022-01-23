import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import "../scss/views/home.scss";

const HomeView = () => {
  const { data } = useContext(DataContext);
  return (
    <section className='home-view'>
      <ListHeader />
      {data && data.map((invoice) => <ListItem key={invoice.id} {...invoice} />)}
    </section>
  );
};

export default HomeView;
