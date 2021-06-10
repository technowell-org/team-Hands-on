import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FcMenu } from "react-icons/fc";


const Header = () => {
 
  return (
    <div className="Header">
    
      <ul className="header-ul">
        <li className="header-li">
          <NavLink
            to="/"
            exact
           
            className="header-navlink"
          >
            Home
          </NavLink>
        </li>
        <li className="header-li">
          <NavLink
            to="/products"
           
            className="header-navlink"
          >
            Products
          </NavLink>
        </li>
        <li className="header-li">
          <NavLink
            to="/cart"
            exact
          
            className="header-navlink"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;