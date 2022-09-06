import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="img_logo">
        <img className="nav_logo" src="logo2.png" alt="logo" />
      </div>
      <div className="categories">
        <a href="#wrapper-films">Films</a>
        <a href="#wrapper-series">Tv-Series</a>   
      </div>
    </div>
  );
}

export default Nav;
