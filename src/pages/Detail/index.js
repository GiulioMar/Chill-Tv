import axios from "../../utils/axios";
import requests from "../../utils/request";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./style.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Detail() {
  let { slug: productSlug, id: productId } = useParams();
  let location = useLocation();
  const [movie, setMovie] = useState([]);
  console.log("location", location);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrendingSeries);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="detail"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
  )`,
      backgroundPosition: "center center",
    }}
    >
      
      {productSlug} {productId}
    </div>
  );
}

export default Detail;
