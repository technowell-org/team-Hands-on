import "./Products.css";
import React, { useState } from "react";
import { ItemsData } from "./ItemsData";
import { FaGripHorizontal, FaListUl } from "react-icons/fa";

const Products = () => {
  var des_price = [];
  ItemsData.map((item, index) => {
    return des_price.push({ key: item.des_price, val: index });
  });
  var title = [];
  ItemsData.map((item, index) => {
    return title.push({ key: item.title, val: index });
  });
  const [activeView, setActiveView] = useState("");
  const [sortby, setSortby] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  const onGViewClick = () => {
    setActiveView("");
  };
  const onLViewClick = () => {
    setActiveView("-LView");
  };

  const onSortClick = (e) => {
    if (e.target.value === "NA") {
      setSortby([0, 1, 2, 3, 4, 5, 6, 7]);
    } else if (e.target.value === "LH") {
      var lh = [...des_price];
      lh.sort((a, b) => a.key - b.key);
      var temp = [];
      lh.map((element) => temp.push(element.val));
      setSortby(temp);
    } else if (e.target.value === "HL") {
      var hl = [...des_price];
      hl.sort((a, b) => a.key - b.key);
      var temp = [];
      hl.map((element) => temp.push(element.val));
      temp.reverse();
      setSortby(temp);
    } else if (e.target.value === "AZ") {
      var az = [...title];
      az.sort((a, b) => a.key.localeCompare(b.key));
      var temp = [];
      az.map((element) => temp.push(element.val));
      setSortby(temp);
    } else if (e.target.value === "ZA") {
      var za = [...title];
      za.sort((a, b) => a.key.localeCompare(b.key));
      var temp = [];
      za.map((element) => temp.push(element.val));
      temp.reverse();
      setSortby(temp);
    }
  };
  const renderedItems = sortby.map((value) => {
    const item = ItemsData[value];
    return (
      <div className={`renderedItems${activeView}`} key={item.title}>
        <div id={`off${activeView}`}>{item.offer}</div>
        <div id={`rating${activeView}`}>Rating:{item.rating}</div>

        <a>
          <img src={item.pic} alt="products"></img>
        </a>

        <div className={`description${activeView}`}>
          <div className={`text-d${activeView}`}>
            {item.title}
            <div id={`actual_price${activeView}`}>{item.actual_price}</div>
            <div id={`des_price${activeView}`}> {item.des_price}</div>
          </div>
          <button type="button">ADD TO CART</button>
        </div>
      </div>
    );
  });

  return (
    <div className="products">
      <div className="header-p">
        <h1>Products</h1>
      </div>
      <div className="top-h-p">
        <label for="sort">Sort by:</label>

        <select name="sort" id="sort" onChange={onSortClick}>
          <option value="NA">Newest Articles</option>
          <option value="LH">Low-High Price</option>
          <option value="HL">High-Low Price</option>
          <option value="AZ">A-Z Order</option>
          <option value="ZA">Z-A Order</option>
        </select>
        <div>Showing: 1-8 items</div>
        <button className="grid-view" onClick={onGViewClick}>
          <FaGripHorizontal></FaGripHorizontal>
        </button>
        <button className="list-view" onClick={onLViewClick}>
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
