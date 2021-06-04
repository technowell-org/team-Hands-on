import "./HomeItems.css";
import React from "react";
import { ItemsData } from "./products/ItemsData";
import { useHistory } from "react-router-dom";

const HomeItems = ({ item }) => {
  const history = useHistory();

  const renderedListItems = item.map((id) => {
    return (
      <div key={id}>
        {ItemsData.map((val) => {
          if (id === val.id) {
            return (
              <div className="homeItems" key={val.id}>
                <div
                  className="image-homeItems"
                  onClick={() => history.push(`/products/${val.id}`)}
                >
                  <img src={val.pic} alt="product"></img>
                </div>
                <div className="content-homeItems">
                  <div
                    className="title-homeItems"
                    onClick={() => history.push(`/products/${val.id}`)}
                  >
                    {val.title}
                  </div>
                  <div className="act-price-homeItems">{val.actual_price}</div>
                  <div className="des-price-homeItems">{val.des_price}</div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  });
  return <div>{renderedListItems}</div>;
};

export default HomeItems;
