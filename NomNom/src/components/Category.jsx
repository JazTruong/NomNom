import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Link } from 'react-router-dom'
import './Category.css'

export default function Cuisines() {
  return (
    <div className="list">
     
      <nav className="links">
        <Link className="link-icon" to={'/cuisine/Italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </Link>     
        <Link className="link-icon" to={'/cuisine/American'}>
          <FaHamburger/>
          <h4>American</h4>
        </Link>     
        <Link className="link-icon" to={'/cuisine/Thai'}>
          <GiNoodles />
          <h4>Thai</h4>
        </Link>     
        <Link className="link-icon" to={'/cuisine/Japanese'}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </Link>     
      </nav>

    </div>
  )
}