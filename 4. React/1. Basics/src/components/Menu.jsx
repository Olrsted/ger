import { useState } from 'react';
import './Menu.css';

function Menu(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      {
        show ?
          <div>
            <h1>{props.title}</h1>
            <ol>
              {
                props.items &&
                props.items.map((item, index) => {
                  return <li key={index}>{item}</li>
                })
              }
            </ol>
          </div>
          : <p>{props.title} Hidden!</p>
      }
      <button onClick={() => setShow(!show)}>{show ? `Hide ${props.title}` : `Show ${props.title}`}</button>
    </div>
  )
}

export default Menu