import { Link } from "react-router-dom";
import "./HomeView.css";

function HomeView() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <header>
        <div className="buttons">
          <Link to={`/register`} class="button">Register</Link>
          <Link to={`/login`} class="button">Login</Link>
        </div>
      </header>
      <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
      </div>
    </div>
  )
}

export default HomeView;