import "./Cart.css";
import React from "react";
import { ProductsData } from "./ProductsData";
import { MdClose } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Cart = ({ cartItem, setCartItem }) => {
  const history = useHistory();
  const onItemClick = (id) => {
    history.push(`/Main/${id}`);
  };
  const onBackToShopClick = () => {
    history.push(`/Main`);
  };
const onBackToHomeClick = () => {
    history.push(`/Home`);
}


  const onClearCartClick = () => {
    setCartItem([]);
  };

  return (
    <div className="cart">
     
      <hr></hr>
      <div className="index-cart">
        <div className="product-name-cart">Product Name</div>
        <ul>
          <li className="index-title-cart">Quantity</li>
          <li className="index-title-cart">Price</li>
          <li className="index-title-cart">Subtotal</li>
          <li className="index-title-cart">
            <button
              type="button"
              className="clear-cart"
              onClick={onClearCartClick}
            >
              CLEAR CART
            </button>
          </li>
        </ul>
        <div></div>
      </div>
      <br></br>
      <hr></hr>
      <div className="siri">
         There are no items in your cart
      </div>
      < hr/>
      <div className="total">
      Total: <b>$0.00</b>
      </div>
      <hr />

    
      <button className="back-to-shop" onClick={onBackToShopClick}>
        <BiArrowBack className="BiArrowBack"></BiArrowBack>
        BACK TO SHOPPING
      </button>
      <button className="hii" onClick={onBackToHomeClick}>
       
       checkout
      </button>
      <hr />
    </div>
  );
};

export default Cart;