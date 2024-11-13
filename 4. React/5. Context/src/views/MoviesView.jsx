import { Outlet, useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";
import "./MoviesView.css";

function MoviesView() {

  const navigate = useNavigate();
  const { email } = useStoreContext();

  function logout() {
    navigate("/");
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>{`Welcome, ${email}!`}</h1>
        <button onClick={() => logout()} className="logout-button">Logout</button>
      </div>
      <Outlet />
    </div>
  );
}

export default MoviesView;
