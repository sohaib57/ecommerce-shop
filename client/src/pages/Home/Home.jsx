import React from "react";
import FeaturedProducts from "../../components/FeaturedProduts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact/>
    </>
  );
};

export default Home;
