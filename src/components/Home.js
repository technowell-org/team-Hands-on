import "./Home.css";
import React from "react";
import ImageSlider from "./slide_info/ImageSlider";
import { SliderData } from "./slide_info/SliderData";
import HomeItems from "./HomeItems";
const Home = () => {
  return (
    <div className="home">
      <div className="slider-home">
        <ImageSlider slides={SliderData} />
      </div>

      <div className="list-of-sales">
        <div className="new-arr">
          <h4>NEW ARRIVALS</h4>
          <hr></hr>

          <HomeItems item={["1", "2", "3"]}></HomeItems>
        </div>
        <div className="new-arr">
          <h4>ON SALE</h4>
          <hr></hr>
          <HomeItems item={["3", "4", "5"]}></HomeItems>
        </div>
        <div className="new-arr">
          <h4>BEST RATED</h4>
          <hr></hr>
          <HomeItems item={["5", "6", "7"]}></HomeItems>
        </div>
      </div>
    </div>
  );
};

export default Home;
