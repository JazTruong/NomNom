import { useState } from "react"
import { Link } from "react-router-dom"
import './Calorie.css'

export default function Calorie() {

  const [calorieInput, setCalorieInput] = useState("")

  function handleCalorie(e) {
    setCalorieInput(e.target.value)
  }

  return (
    <div className="wrapper-calorie">

      <div className="card-calorie">
        <p>PLAN YOUR DAILY CALORIES INTAKE!</p>

        <div className="info-calorie">
          <form className='form-calorie' action="">
            <label htmlFor="">Calorie</label>
            <input onChange={handleCalorie} type="text" placeholder="in kcal"/>
          </form>

          <Link to={`/planner/${calorieInput}/day`}>
            <button>CHECK OUT THE PLAN</button>
          </Link>
        </div>

      </div>

      <img src="/calorie.jpeg" alt="" />

    </div>
  )
}