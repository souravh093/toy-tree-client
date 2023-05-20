import React from "react";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Category from "./Category/Category";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner />
      <Gallery />
      <Category />
    </>
  );
};

export default Home;
