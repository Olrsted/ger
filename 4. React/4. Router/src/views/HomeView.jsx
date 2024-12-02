import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../components/Genres.jsx"
import "./HomeView.css";

function HomeView() {
  const [movies, setMovies] = useState([]);
  const genres = [
    {
      genre: "Action",
      id: 28
    },
    {
      genre: "Family",
      id: 10751,
    },
    {
      genre: "Science Fiction",
      id: 878
    }
  ]

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      const threeMovies = [];
      shuffle(response.data.results);
      threeMovies.push(response.data.results.pop());
      threeMovies.push(response.data.results.pop());
      threeMovies.push(response.data.results.pop());
      setMovies(threeMovies);
    })();
  }, []);

  return (
    <div className="hero">
      <div className="overlay"></div>
      <header>
        <div className="buttons">
          <Link to={`/register`} className="button">Register</Link>
          <Link to={`/login`} className="button">Login</Link>
        </div>
      </header>
      <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
      </div>
      <div>
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
      <Genres genresList={genres} />
    </div>
  )
}

export default HomeView;