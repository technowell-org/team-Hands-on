import "./Cart.css";
import React from "react";
import Heading from "../Heading";
import { ItemsData } from "../products/ItemsData";
import { MdClose } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Cart = ({ cartItem, setCartItem }) => {
  const history = useHistory();
  const onItemClick = (id) => {
    history.push(`/products/${id}`);
  };
  const onBackToShopClick = () => {
    history.push(`/products`);
  };
  const onMinusClick = (value, index) => {
    let cartItemT4 = [...cartItem];

    if (cartItemT4[index].quantity > 1) {
      cartItemT4[index].quantity = cartItemT4[index].quantity - 1;
    }

    setCartItem(cartItemT4);
  };
  const onPlusClick = (value, index) => {
    let cartItemT5 = [...cartItem];
    cartItemT5[index].quantity = cartItemT5[index].quantity + 1;
    setCartItem(cartItemT5);
  };
  const onClearCartClick = () => {
    setCartItem([]);
  };
  const onCancelClick = (index) => {
    let cartItemT3 = [...cartItem];
    cartItemT3.splice(index, 1);
    setCartItem(cartItemT3);
  };
  var renderItemsInCart;
  if (cartItem.length !== 0) {
    renderItemsInCart = cartItem.map((value, index) => {
      const eachCartItem = ItemsData.map((val) => {
        if (value.id === val.id) {
          return (
            <div className="eachCartItem" key={val.id}>
              <div className="image-cart">
                <img
                  src={val.pic}
                  alt="product"
                  onClick={() => onItemClick(val.id)}
                ></img>
              </div>
              <div className="title-cart" onClick={() => onItemClick(val.id)}>
                {val.title}
              </div>
              <div className="content-cart">
                <div className="quantity-cart">
                  <FaMinus
                    className="minus"
                    size={10}
                    onClick={() => onMinusClick(value, index)}
                  ></FaMinus>
                  {value.quantity}

                  <FaPlus
                    className="plus"
                    size={10}
                    onClick={() => onPlusClick(value, index)}
                  ></FaPlus>
                </div>
                <div className="act-price-cart">${val.actual_price}</div>
                <div className="des-price-cart">${val.des_price}</div>
                <div className="subtotal-cart">
                  ${value.quantity * val.des_price}
                </div>
                <div>
                  <MdClose
                    className="cancel-button"
                    onClick={() => onCancelClick(index)}
                  ></MdClose>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      });
      return (
        <div className="renderItemsInCart" key={value.id}>
          {eachCartItem}

          <hr></hr>
        </div>
      );
    });
  } else {
    renderItemsInCart = (
      <div className="no-items">There are no items in your cart..</div>
    );
  }
  let titles = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
  ];
  return (
    <div className="cart">
      <Heading current="Cart" titles={titles}></Heading>
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

      {renderItemsInCart}
      <button className="back-to-shop" onClick={onBackToShopClick}>
        <BiArrowBack className="BiArrowBack"></BiArrowBack>
        BACK TO SHOPPING
      </button>
    </div>
  );
};

export default Cart;
