import "./Heading.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

const Heading = ({ titles, current }) => {
  const renderTitles = titles.map((title) => {
    return (
      <ul className="title-ul" key={title.name}>
        <li className="title-list">
          <Link to={title.path} className="links">
            <BsCaretRightFill></BsCaretRightFill>
            {title.name}
          </Link>
        </li>
      </ul>
    );
  });
  return (
    <div className="heading">
      <h1 id="title-heading">{current}</h1>
      <div className="renderTitles">{renderTitles} </div>
    </div>
  );
};

export default Heading;
