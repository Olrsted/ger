import { Outlet, useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";
import "./MoviesView.css";

function MoviesView() {

  const navigate = useNavigate();
  const { user } = useStoreContext();

  console.log(user);

  function logout() {
    navigate("/");
  }

  function cart() {
    navigate("/cart")
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>{`Welcome, ${user.email}!`}</h1>
        <button onClick={() => cart()} className="logout-button">Cart</button>
        <button onClick={() => logout()} className="logout-button">Logout</button>
      </div>
      <Outlet />
    </div>
  );
}

export default MoviesView;
