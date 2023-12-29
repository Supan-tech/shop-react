import React from "react";
import { Link } from 'react-router-dom';
import WelcomeBanner from "../components/Welcome";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <div>
      <WelcomeBanner />
      <div className="container mx-auto mt-8">
        <FeaturedProducts />
        <NewArrivals />
      </div>
    </div>
  );
};

export default Home;
