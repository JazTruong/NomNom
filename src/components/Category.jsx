import { GiSlicedBread, GiFastNoodles, GiChickenOven, GiCakeSlice } from "react-icons/gi";
import { Link } from 'react-router-dom'
import './Category.css'

export default function Cuisines() {
  return (
    <div className="list">
     
      <nav className="links">
        <Link className="link-icon" to={'/meal/breakfast'}>
          <GiSlicedBread />
          <h4>Breakfast</h4>
        </Link>     
        <Link className="link-icon" to={'/meal/lunch'}>
          <GiFastNoodles />
          <h4>Lunch</h4>
        </Link>     
        <Link className="link-icon" to={'/meal/dinner'}>
          <GiChickenOven />
          <h4>Dinner</h4>
        </Link>     
        <Link className="link-icon" to={'/meal/dessert'}>
          <GiCakeSlice />
          <h4>Desserts</h4>
        </Link>     
      </nav>

    </div>
  )
}