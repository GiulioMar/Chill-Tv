import React from 'react'
import requests from '../../request'
import {Nav, Row, TopBanner} from "../../components"
import "./style.css"


function Home() {
  return (
    <div className="app">
    <div id="top">
      <Nav />{" "}
    </div>
    <TopBanner />

    <div id="tMovies">
      {" "}
      <Row
        title="Trending Movies"
        fetchUrl={requests?.fetchTrendingMovie}
      />{" "}
    </div>
    <div className="separation"></div>
    <Row title="Trending Series" fetchUrl={requests?.fetchTrendingSeries} />
    <div className="separation"></div>
    <div id="tSeries">
      {" "}
      <Row
        title="Trending Actors"
        fetchUrl={requests?.fetchTrendingPerson}
      />{" "}
    </div>
    <div className="separation"></div>
  </div>
  )
}

export default Home