import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const history = useNavigate();
  const capocchie = path => {
    history(path);
  };

  return (
    <div className="nav">
      <a href="top">
        <img  onClick={() => capocchie("/")}
         className="nav_logo" src="logo2.png" alt="logo" />
      </a>
      <div className="categories">
        <a href="#tMovies">Films</a>
        <a href="#tSeries">Tv-Series</a>
      </div>
      <img
      onClick={() => capocchie("/profile")}
      className="nav_avatar" src="avatar__chilltv.png" alt="" />
    </div>
  );
}

export default Nav;
