import axios from "axios";
import { useEffect, useState } from "react";
import "./MoviesView.css";

function MoviesView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      setMovies(response.data.results);
    })();
  }, []);

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <p className="movie-title">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesView;
