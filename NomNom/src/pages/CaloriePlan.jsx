import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import './CaloriePlan.css'

export default function CaloriePlan() {

  const [calories, setCalories] = useState([])
  const [nutrients, setNutrients] = useState({})
  const apiKey = import.meta.env.VITE_API_KEY;

  let params = useParams()
  useEffect(() => {
    getCalories(params.calorie)
  }, [params.calorie])

  async function getCalories(number) {
 
      const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&targetCalories=${number}&timeFrame=day`
      const res = await axios.get(url)
      const mealPlan = res.data
      setCalories(mealPlan.meals)
      setNutrients(mealPlan.nutrients)   
  }

  // async function getImage(id) {
 
  //     const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`
  //     const res = await axios.get(url)
  //     const mealPlan = res.data
  //     setCalories(mealPlan.meals)
  //     setNutrients(mealPlan.nutrients)   
  // }
  
  return (
    <div className="plan-wrapper">

      <div className="plan-nutrient">
        <p className="nutrient-title">NUTRIENTS INFORMATION</p>
        <div className="nutrient-details">
          {     
            Object.keys(nutrients).map((nutrient, idx) => (
              <div>
                {idx === 0 ? <p>Calories: {nutrients.calories}</p> : ""}
                {idx === 1 ? <p>Protein: {nutrients.protein}</p> : ""}
                {idx === 2 ? <p>Fat: {nutrients.fat}</p>: ""}
                {idx === 3 ? <p>Carbohydrates: {nutrients.carbohydrates}</p> : ""}  
              </div>
            ))
          }
        </div>
      </div>

      <div className="plan-meals">
        <p className="plan-daily">WHOLE DAY MENU</p>
        <div className="plan-details">     
          {
            calories.map((calorie, idx) => (
              <div className="plan-info" key={calorie.id}>
                {idx === 0 ? <h1>Breakfast</h1> : ''}
                {idx === 1 ? <h1>Lunch</h1> : ''}
                {idx === 2 ? <h1>Dinner</h1> : ''}
                
                <h3>{calorie.title}</h3>
                <p>Ready In: {calorie.readyInMinutes} mins</p>
                <p>Number Of Servings: {calorie.servings}</p>
                <Link to={`/recipe/${calorie.id}`}>
                  <p className="plan-btn">VIEW RECIPE</p>
                </Link>                
              </div>
              ))
            }
        </div>
      </div>

    </div>
  )
}