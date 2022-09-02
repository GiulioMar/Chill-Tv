import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>Chill-Tv</h1>
      <Row title ="Trending Movies" fetchUrl={requests.fetchTrendingMovie} />
    </div>
  );
}

export default App;
