import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import Menu from "./Menu";

const Header = () => {
  const onMenuClick = () => {
    <Menu></Menu>;
  };
  return (
    <div className="Header">
      <FcMenu size={35} className="menu" onClick={onMenuClick}></FcMenu>
      <ul className="header-ul">
        <li className="header-li">
          <NavLink
            to="/"
            exact
            activeClassName="active-header"
            className="header-navlink"
          >
            Home
          </NavLink>
        </li>
        <li className="header-li">
          <NavLink
            to="/products"
            activeClassName="active-header"
            className="header-navlink"
          >
            Products
          </NavLink>
        </li>
        <li className="header-li">
          <NavLink
            to="/cart"
            exact
            activeClassName="active-header"
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
