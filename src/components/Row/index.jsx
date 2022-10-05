import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetails } from "../../features/productSlice";
import { base_url } from "../../utils/utility";





function Row({ title, fetchUrl }) {
  const dispatch = useDispatch();
  
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const filtered = request.data.results.filter((el) => el.profile_path);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);



  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

const handleOnClickProduct = (product) => {
  dispatch(
    setProductDetails(product)
  );
}


  
  switch (title) {
    case "Trending Movies":
    case "Trending Series":
    default:
      return (
        <div className="row">
          <h2>{title}</h2>

          <div className="row_posters">
            {movies.map((movie) => (
              <Link 
              onClick={() => handleOnClickProduct(movie)}
              to={`/detail/${movie.title || movie.name}/${movie.id}`}>
                <img
                  key={movie.id}
                  className="row_poster"
                  src={`${base_url}${movie.poster_path || movie.profile_path} `}
                  alt={movie.name}
                />
              </Link>
            ))}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      );
      break;
    case "Trending Actors":
      return (
        <div className="row">
          <h2>{title} </h2>

          <div className="row_posters">
            {movies
              .filter((el) => el.profile_path)
              .map((movie) => (
                <Link 
                onClick={() => handleOnClickProduct(movie)}
                to={`/detail/${movie.title || movie.name}/${movie.id}`}>
                <img
                  key={movie.id}
                  className="row_poster"
                  src={`${base_url}${movie.poster_path || movie.profile_path} `}
                  alt={movie.name}
                />
                </Link>
              ))}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      );
  }
}

export default Row;
