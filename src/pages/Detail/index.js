import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { selectProduct } from "../../features/productSlice";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { Nav } from "../../components";

function Detail() {
  const productState = useSelector(selectProduct);
  const [productSelected, setProductSelected] = useState({});

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    setProductSelected(productState);
  }, [productState]);
  console.log("productSelected", productSelected);

  const handleClick = (productSelected) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(productSelected?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header
      className="detail"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${
        productSelected.backdrop_path || productSelected.profile_path
      }"
  )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="topBanner_contents">
        <h1 className="topBanner_title">
          {productSelected.title || productSelected.name}
        </h1>
        <div className="topBanner_buttons">
          <button className="topBanner_button">Play</button>
          <button className="topBanner_button">My List</button>
          <button
            onClick={() => handleClick(productSelected)}
            className="topBanner_button"
          >
            Trailer
          </button>
          <Link to={`/`}>
            <button className="topBanner_button">Home</button>{" "}
          </Link>
          <h1 className="topBanner_description">
            {productSelected?.overview || productSelected?.biography}
          </h1>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>

      <div className="detail_fadeBottom"></div>
    </header>
  );
}

export default Detail;
