import './App.css'
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true);
  const food = ['Pizza', 'Hamburger', 'Sushi', 'Biryani'];

  return (
    <div>
      {
        show ?
          <div>
            <h1>My fav foods!</h1>
            <ol>
              {
                food.map((item, index) => {
                  return <li key={index}>{item}</li>
                })
              }
            </ol>
          </div>
          : <p>Foods Hidden!</p>
      }
      <button onClick={() => setShow(!show)}>{show ? "Hide Foods" : "Show Foods"}</button>
    </div>
  )
}

export default App
