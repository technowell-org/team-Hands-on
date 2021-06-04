import "./Products.css";
import React, { useState } from "react";
import { ItemsData } from "./ItemsData";
import { FaGripHorizontal, FaListUl } from "react-icons/fa";

import { useHistory } from "react-router-dom";
import Heading from "../Heading";

const Products = ({ cartItem, setCartItem }) => {
  var des_price = [];
  ItemsData.map((item, index) => {
    return des_price.push({ key: item.des_price, val: index });
  });
  var title = [];
  ItemsData.map((item, index) => {
    return title.push({ key: item.title, val: index });
  });
  const [activeView, setActiveView] = useState("");

  const [sortby, setSortby] = useState([...Array(ItemsData.length).keys()]);
  const history = useHistory();

  const onAddCartClick = (id) => {
    if (cartItem.length === 0) {
      let cartItemT = [];
      cartItemT.push({ id: id, quantity: 1 });
      setCartItem(cartItemT);
    } else {
      var i;
      var tem = 0; // no item
      for (i = 0; i < cartItem.length; i++) {
        let val = cartItem[i];
        if (id === val.id) {
          tem = 1;
          let cartItemT1 = [...cartItem];
          cartItemT1.splice(i, 1, { id: id, quantity: val.quantity + 1 });
          setCartItem(cartItemT1);
        }
      }
      if (tem === 0) {
        let cartItemT2 = [...cartItem];
        cartItemT2.push({ id: id, quantity: 1 });
        setCartItem(cartItemT2);
      }
    }
  };
  let titles = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];
  const onItemClick = (id) => {
    history.push(`/products/${id}`);
  };

  const onGViewClick = () => {
    setActiveView("");
  };
  const onLViewClick = () => {
    setActiveView("-LView");
  };

  const onSortClick = (e) => {
    if (e.target.value === "NA") {
      setSortby([...Array(ItemsData.length).keys()]);
    } else if (e.target.value === "LH") {
      var lh = [...des_price];
      lh.sort((a, b) => a.key - b.key);
      var temp = [];
      lh.map((element) => temp.push(element.val));
      setSortby(temp);
    } else if (e.target.value === "HL") {
      var hl = [...des_price];
      hl.sort((a, b) => a.key - b.key);
      var temp1 = [];
      hl.map((element) => temp1.push(element.val));
      temp1.reverse();
      setSortby(temp1);
    } else if (e.target.value === "AZ") {
      var az = [...title];
      az.sort((a, b) => a.key.localeCompare(b.key));
      var temp2 = [];
      az.map((element) => temp2.push(element.val));
      setSortby(temp2);
    } else if (e.target.value === "ZA") {
      var za = [...title];
      za.sort((a, b) => a.key.localeCompare(b.key));
      var temp3 = [];
      za.map((element) => temp3.push(element.val));
      temp3.reverse();
      setSortby(temp3);
    }
  };
  const renderedItems = sortby.map((value) => {
    var item = ItemsData[value];
    return (
      <div className={`renderedItems${activeView}`} key={item.id}>
        <div id={`off${activeView}`}>{item.offer}</div>
        <div id={`rating${activeView}`}>Rating:{item.rating}</div>

        <div onClick={() => onItemClick(`${item.id}`)}>
          <img src={item.pic} alt="products"></img>
        </div>

        <div className={`description${activeView}`}>
          <div className={`text-d${activeView}`}>
            <div
              className="title-prod"
              onClick={() => onItemClick(`${item.id}`)}
            >
              {item.title}
            </div>
            <div id={`actual_price${activeView}`}>{item.actual_price}</div>
            <div id={`des_price${activeView}`}> {item.des_price}</div>
          </div>
          <button type="button" onClick={() => onAddCartClick(item.id)}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="products">
      <Heading current="Products" titles={titles}></Heading>
      <div className="top-h-p">
        <label htmlFor="sort">Sort by:</label>

        <select name="sort" id="sort" onChange={onSortClick}>
          <option value="NA">Newest Articles</option>
          <option value="LH">Low-High Price</option>
          <option value="HL">High-Low Price</option>
          <option value="AZ">A-Z Order</option>
          <option value="ZA">Z-A Order</option>
        </select>
        <div>Showing: 1-8 items</div>
        <button className={`grid-view${activeView}`} onClick={onGViewClick}>
          <FaGripHorizontal></FaGripHorizontal>
        </button>
        <button className={`list-view${activeView}`} onClick={onLViewClick}>
          <FaListUl></FaListUl>
        </button>
      </div>

      <div className="content-p">
        <div className="items-c-p">{renderedItems}</div>
      </div>
    </div>
  );
};

export default Products;
