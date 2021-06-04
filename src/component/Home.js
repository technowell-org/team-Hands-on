import "./Home.css";
import React from "react";
import ImageSlider from "./slide_info/ImageSlider";
import { SliderData } from "./slide_info/SliderData";
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <ImageSlider slides={SliderData} />;
      </div>
      <div className="list-of-sales">
          <div className="row">
              <div className="col-md-4">
              <h6>NEW ARRIVALS</h6>
              
             
             
              <hr />
              <ul className="nav-links">
                 <Link  to = "/Home">
                  <li>Home</li>
                  </Link>
                  <Link to= "/Main">
                  <li>Product</li>
                  </Link>
                  <Link to = "/Cart">
                  <li>Cart</li>
                  </Link>
             </ul>
              
              
              </div>
              <div className="col-md-4">
                  <h6>ON SALE</h6>
                  <hr />
                 
              </div>
              <div className="col-md-4">
              <h6>BEST RATED</h6>
              <hr />
             
              </div>
          </div>

        
      </div>



    </div>
  );
};

export default Home;