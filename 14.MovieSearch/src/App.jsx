import { useState } from "react";

const API_KEY = "API HERE";
const BASE_URL = "http://www.omdbapi.com/";

function App() {
  const [movie, setMovie] = useState(null);
  const [search, setSearch] = useState("");

  async function fetchMoveiData() {
    try {
      const response = await fetch(`${BASE_URL}?t=${search}&apikey=${API_KEY}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
        setSearch("");
        console.log("Move Data: ", data);
      } else {
        console.log("Error: ", data.Error);
      }
    } catch (error) {
      console.log("Error fetching movie data:", error.message);
    }
  }

  return (
    <div className="container">
      {movie && (
        <div className="card">
          <img className="poster" src={movie.Poster} alt={movie.Title} />
          <div className="content">
            <h2 className="title">{movie.Title}</h2>
            <span className="dates">
              Created: {movie.Year} - Length {movie.Runtime}
            </span>
            <h3 className="genre">{movie.Genre}</h3>
            <p className="plot">{movie.Plot}</p>
            <p className="language">Language: {movie.Language}</p>
            <p className="country">Country: {movie.Country}</p>
            <h4 className="rating">IMDB rating: {movie.imdbRating}/10</h4>
          </div>
        </div>
      )}
      <div className="search">
        <input
          className="input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a movie..."
        />
        <button className="btn" onClick={fetchMoveiData}>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
