import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import TopBanner from "./TopBanner";

function App() {
  return (
    <div className="app">
   <TopBanner />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovie} />
      <Row title="Trending Series" fetchUrl={requests.fetchTrendingSeries} />
      <Row title="Trending Actors" fetchUrl={requests.fetchTrendingPerson}  />
    </div>
  );
}

export default App;
