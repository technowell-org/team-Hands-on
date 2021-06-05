import "./Data.css";
import React from "react";
import { Items } from "./products/Items";
import { useHistory } from "react-router-dom";

const HomeData = ({ item }) => {
  const history = useHistory();

  const renderedListItems = item.map((id) => {
    return (
      <div>
        {Items.map((val) => {
          if (id === val.id) {
            return (
              <div className="homeData">
                <div className="image-homeItems" onClick={() => history.push(`/products/${val.id}`)}>
                  <img src={val.pic} className="im1"></img>
              
                <div className="content-homeData">
                  <div className="title" onClick={() => history.push(`/products/${val.id}`)} >
                    {val.title}
                  </div>
                  <div className="act-price-homeData">{val.actual_price}</div>
                  <div className="des-price-homeData">{val.des_price}</div>
                </div>
              
            </div>
            </div>
            );
          }
        })}
      </div>
    );
  });
  return <div>{renderedListItems}</div>;
};

export default HomeData;