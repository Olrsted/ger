import Menu from "./components/Menu.jsx"
import './App.css'

function App() {
  return (
    <div className="menu-container">
      <Menu title={'Food Menu'} items={['Pizza', 'Hamburger', 'Sushi', 'Biryani']} />
      <Menu title={'Beverage Menu'} items={['Coke', '7-UP', 'Tea', 'Coffee', 'Bubble Tea']} />
      <Menu title={'Dessert Menu'} items={['Cake', 'Ice Cream', 'Pudding']} />
    </div>
  )
}

export default App
