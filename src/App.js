import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import TopBanner from "./TopBanner";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div id="top"><Nav /> </div>
      <TopBanner />
      <div id="tMovies">
        {" "}
        <Row
          title="Trending Movies"
          fetchUrl={requests.fetchTrendingMovie}
        />{" "}
      </div>
      <div className="separation"></div>
      <Row title="Trending Series" fetchUrl={requests.fetchTrendingSeries} />
      <div className="separation"></div>
      <div id="tSeries">
        {" "}
        <Row
          title="Trending Actors"
          fetchUrl={requests.fetchTrendingPerson}
        />{" "}
      </div>
      <div className="separation"></div>
    </div>
  );
}

export default App;
