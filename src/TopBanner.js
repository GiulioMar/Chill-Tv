import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./TopBanner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function TopBanner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };

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
          <button
            onClick={() => handleClick(movie)}
            className="topBanner_button"
          >
            Trailer
          </button>
        </div>
        <h1 className="topBanner_description">{movie?.overview}</h1>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      <div className="topBanner_fadeBottom"></div>
    </header>
  );
}

export default TopBanner;
