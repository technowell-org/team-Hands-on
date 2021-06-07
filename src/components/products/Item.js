import "./Item.css";
import React, { useState } from "react";
import Heading from "../Heading";
import { useParams } from "react-router-dom";
import { ItemsData } from "./ItemsData";
import { connect } from "react-redux";
import { addWithQuantity } from "../../actions/index";

const Item = (props) => {
  const [quant, setQuant] = useState(1);
  const { id } = useParams();

  const onQuantityChange = (e) => {
    setQuant(parseInt(e.target.value));
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
            <button
              type="button"
              onClick={() => props.addWithQuantity(id, quant)}
            >
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
const mapStateToProps = (state) => {
  return { items: state.items };
};
export default connect(mapStateToProps, { addWithQuantity })(Item);
