import "./Home.css";
import React from "react";
import ImageSlider from "./slide_info/ImageSlider";
import { SliderData } from "./slide_info/SliderData";
const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <ImageSlider slides={SliderData} />;
      </div>
      <div className="list-of-sales">
        <h4>NEW ARRIVALS</h4>
        <h4>ON SALE</h4>
        <h4>BEST RATED</h4>
      </div>
    </div>
  );
};

export default Home;
