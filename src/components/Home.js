import "./Home.css";
import React from "react";
import ImageSlider from "./slide_info/ImageSlider";
import { SliderData } from "./slide_info/SliderData";
import { NavLink } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import HomeData from "./HomeData";
import {ImAirplane} from "react-icons/im"
 import {RiCustomerServiceLine} from "react-icons/ri"
 import {FaMoneyCheck} from "react-icons/fa"
 import {FaRetweet} from "react-icons/fa"
// import Image from "./Image"

const Home = () => {
  return (
    <div className="main_content">

    <nav>
    <div className="container">
    <FcMenu size={35} className="menu"></FcMenu>
      
    <ul className="navbar">
          <NavLink className="n1" to="/" >Home</NavLink>

         <NavLink className="n2" to="/Products"> Products</NavLink>

           <NavLink className="n3" to="/Cart">Cart</NavLink>
          </ul>
       
          </div>
         </nav>



    <div className="home">
      <div className="slider">
        <ImageSlider slides={SliderData} />;
      </div>

      <div className="list-of-sales">
      <div className="new-arr">
          <h4>NEW ARRIVALS</h4>
          <hr></hr>

<HomeData item={["1", "2", "3"]}></HomeData>
        </div>


        <div className="new-arr">
          <h4>ON SALE</h4>
          <hr></hr>
          <HomeData item={["3", "4", "5"]}></HomeData>
        </div>
        <div className="new-arr">
          <h4>BEST RATED</h4>
          <hr></hr>
          <HomeData item={["5", "6", "7"]}></HomeData>
        </div>
      </div>
    </div>
<div className="hh">

<h1>Old Collection</h1>
<h1>HUGE SALE!</h1>
<h1>at our outlet stores</h1>
<button type="button" className="bt">LOCATE STORES</button>
</div>

<div className="mm">
  <div>
<ImAirplane size={35} className="ch" ></ImAirplane>
<h4>Free Worldwide Shipping</h4>
<p>Free shipping for all orders over $100</p>
</div>
<div>
<FaRetweet size={40} className="ch"></FaRetweet>
<h4>Money Back Guarantee</h4>
<p>We return money within 30 days</p>
</div>

<div>
<RiCustomerServiceLine size={40}  className="ch"></RiCustomerServiceLine>
<h4>24/7 Customer Support</h4>
<p>Friendly 24/7 customer support</p>
</div>

<div>
<FaMoneyCheck size={35} className="ch"></FaMoneyCheck>
<h4>Secure Online Payment</h4>
<p>We posess SSL / Secure Certificate</p>
</div>
</div>



    <div className="container f">
    <p>Technowells @2021</p>
    <div className="social">
        <i className="fa fa-facebook"/>
        <i className="fa fa-instagram"/>
    </div> 
        </div>


    </div>
  );
};

export default Home;