import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./TopBanner.css";

function TopBanner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="topBanner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="topBanner_contents">
        <h1 className="topBanner_title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="topBanner_buttons">
            <button className="topBanner_button">Play</button>
            <button className="topBanner_button">My List</button>
        </div>
        <h1 className="topBanner_description">
            {movie?.overview}
        </h1>
        
      </div>
      <div className="topBanner_fadeBottom"></div>
    </header>
  );
}

export default TopBanner;
