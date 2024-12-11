import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllMoviesView.css";

function AllMoviesView() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      setMovies(response.data.results);
    })();
  }, []);

  function loadMovie(id) {
    navigate(`/movies/${id}`);
  }

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card" onClick={() => { loadMovie(movie.id) }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
        </div>
      ))}
    </div>
  );
}

export default AllMoviesView;
