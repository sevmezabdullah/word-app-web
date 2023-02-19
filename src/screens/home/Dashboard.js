import React from 'react';
import Navbar from '../../components/ui/Navbar';
import { useSelector } from 'react-redux';
import Categories from './Categories';
import Home from './Home';
import Users from './Users';
import Words from './Words';

const Dashboard = () => {
  const pageManager = useSelector((state) => state.pageManager.currentIndex);
  let page = <div>{pageManager}</div>;
  if (pageManager === 1) {
    page = <Categories />;
  }
  if (pageManager === 0) {
    page = <Home />;
  }
  if (pageManager === 2) {
    page = <Users />;
  }
  if (pageManager === 3) {
    page = <Words />;
  }

  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default Dashboard;
