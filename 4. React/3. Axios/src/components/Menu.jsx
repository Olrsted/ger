import './Menu.css'
import axios from "axios";
import { useEffect, useState } from "react";

function Menu(props) {
  const [menu, setMenu] = useState([]);
  const [menuDetails, setMenuDetails] = useState([]);

  useEffect(() => {
    (async function getMenuData() {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.category}`);
      setMenu(response.data.meals);
    })();
  }, [])

  async function getMenuByID(id) {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    setMenuDetails(response.data.meals[0]);
  }

  return (
    <div className="menu-container">
      <div className="menu">
        <ol>
          {
            menu.map((item, key) => {
              return (
                <div key={key}>
                  <li >{item.strMeal}</li>
                  <img src={item.strMealThumb} />
                  <a onClick={() => { getMenuByID(item.idMeal) }} href="#">See More</a>
                </div>
              )

            })
          }
        </ol>
      </div>
      <div className="menu-details">
        <h1>{menuDetails.strMeal}</h1>
        <img src={menuDetails.strMealThumb} />
        <p>{menuDetails.strInstructions}</p>
      </div>
    </div>
  )
}

export default Menu;