


















import "./Cart.css";
import React,{useState} from "react";

import Header from "../Header";
import { Items} from "../products/Items";
import { MdClose } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import{ImAirplane} from "react-icons/im"



const Cart = ({ cartItem, setCartItem }) => {
  const history = useHistory();
  const onItemClick = (id) => {
    history.push(`/products/${id}`);
  };
  const onBackToShopClick = () => {
    history.push(`/products`);
  };
  
  

  
  
   const onClearCartClick = () => {
    setCartItem([]);
  };
  
   return (
    <div className="main_content">
<nav>
    <div className="container">
    <FcMenu size={35} className="menu"></FcMenu>
      

    <ul className="navbar">
          <NavLink className="n1" to="/" >Home</NavLink>

         <NavLink className="n2" to="/Products" > Products</NavLink>

           <NavLink className="n3" to="/Cart">Cart</NavLink>
          </ul>
       
          </div>
         </nav>

<div className="pp">
 <h2 className="bb">Products</h2>
<h4 className="h">Home - Cart</h4> 
</div>

    
    <div className="cart">
   <hr></hr>
      <div className="index-cart">
        <div className="product">Product Name</div>
        <ul>
          <li className="index">Quantity</li>
          <li className="index">Price</li>
          <li className="index">Subtotal</li>
          <li className="index">
            <button type="button" className="clear" onClick={onClearCartClick} >
              CLEAR CART
            </button>
          </li>
        </ul>
        <div></div>
      </div>
      <br></br>
      <hr></hr>

      <div className="items">There are no items in your cart..</div>
      <div className="total">Total: $0.00</div>
  
 

      <button className="backshop" onClick={onBackToShopClick}>
        <BiArrowBack className="BiArrowBack"></BiArrowBack>
        BACK TO SHOPPING
      </button>
      <button className="check">
        CHECKOUT
      </button>

      <div className="container f">
    <p>Technowells @2021</p>
    <div className="social">
        <i className="fa fa-facebook"/>
        <i className="fa fa-instagram"/>
    </div> 
        </div>


    </div>
    </div>
  );
};

export default Cart;