import React from "react";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Category from "./Category/Category";
import useTitle from "../../hooks/useTitle";
import Trending from "./Tranding/Trending";

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner />
      <Gallery />
      <Category />
      <Trending />
    </>
  );
};

export default Home;
