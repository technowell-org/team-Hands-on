import "./Products.css";
import React from "react";
import { ItemsData } from "./ItemsData";
import { FaGripHorizontal, FaListUl } from "react-icons/fa";
const Products = () => {
  const renderedItems = ItemsData.map((item) => {
    return (
      <div className="renderedItems">
        <div id="off">{item.offer}</div>
        <div id="rating">Rating:{item.rating}</div>
        <a>
          <img src={item.pic} alt="products"></img>
        </a>
        <div className="description">
          {item.title}
          <div id="actual_price">{item.actual_price}</div>
          <div id="des_price"> {item.des_price}</div>
          <br></br>
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

        <select name="sort" id="sort">
          <option value="Newest Articles">Newest Articles</option>
          <option value="Low-High Price">Low-High Price</option>
          <option value="High-Low Price">High-Low Price</option>
          <option value="A-Z Order">A-Z Order</option>
          <option value="Z-A Order">Z-A Order</option>
        </select>
        <div>Showing: 1-8 items</div>
        <button className="grid-view">
          <FaGripHorizontal></FaGripHorizontal>
        </button>
        <button className="list-view">
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
