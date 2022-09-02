const API_KEY = "2dfb0e268b116181c94996c6ad59cb37";

const requests = {
  fetchTrendingMovie: `/trending/movie/day?api_key=${API_KEY}`,
  fetchTrendingSeries: `/trending/tv/day?api_key=${API_KEY}`,
  fetchTrendingPerson: `/trending/person/day?api_key=${API_KEY}`,
};

export default requests;
