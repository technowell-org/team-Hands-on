import "./Item.css";
import React, { useState } from "react";
import Heading from "../Heading";
import { useParams } from "react-router-dom";
import { ItemsData } from "./ItemsData";

export const Item = ({ cartItem, setCartItem }) => {
  const [quant, setQuant] = useState(1);
  const { id } = useParams();

  const onQuantityChange = (e) => {
    setQuant(parseInt(e.target.value));
  };
  const onAddCartClick = () => {
    if (cartItem.length === 0) {
      let cartItemT = [];
      cartItemT.push({ id: id, quantity: quant });
      setCartItem(cartItemT);
    } else {
      var i;
      var tem = 0; // no item
      for (i = 0; i < cartItem.length; i++) {
        let val = cartItem[i];
        if (id === val.id) {
          tem = 1;
          let cartItemT1 = [...cartItem];
          cartItemT1.splice(i, 1, { id: id, quantity: val.quantity + quant });
          setCartItem(cartItemT1);
        }
      }
      if (tem === 0) {
        let cartItemT2 = [...cartItem];
        cartItemT2.push({ id: id, quantity: quant });
        setCartItem(cartItemT2);
      }
    }
  };
  const renderItem = ItemsData.map((item) => {
    let titles = [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: `${item.title}`, path: `/products/${item.id}` },
    ];

    if (id === item.id) {
      return (
        <div className="renderItem" key={item.id}>
          <Heading current="Products" titles={titles}></Heading>
          <div className="image">
            <div className="offer">{item.offer}</div>
            <img src={item.pic} alt="products"></img>
          </div>
          <div className="content">
            <div id="title">{item.title}</div>
            <div id="actual-price">{item.actual_price}</div>
            <div id="des-price">{item.des_price}</div>
            <div id="description">{item.description}</div>

            <label htmlFor="quantity">Quantity</label>

            <select name="quantity" id="quantity" onChange={onQuantityChange}>
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <hr></hr>
            <button type="button" onClick={onAddCartClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="item">{renderItem}</div>;
};
