import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="nav">
      <a href="top">
        <img className="nav_logo" src="logo2.png" alt="logo" /> 
      </a>
      <div className="categories">
        <a href="#tMovies">Films</a>
        <a href="#tSeries">Tv-Series</a>   
      </div>
    </div>
  );
}

export default Nav;
