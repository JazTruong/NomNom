import { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './Meals.css'

export default function Meals() {

  const [meals, setMeals] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY;
  
  let params = useParams()
  useEffect(() => {
    getMeals(params.type)
    console.log(params.type)
  }, [params.type])

  async function getMeals(meal) {

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${meal}`
    const res = await axios.get(url)
    const recipes = res.data
    setMeals(recipes.results)
  }

  return (
    <div 
      className="meal-card"
      animate={{ opacity: 1 }}  
      initial={{ opacity: 0 }}  
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        {
          meals.map(meal => (
            <div key={meal.id}>
              <Link to={`/recipe/${meal.id}`}>
                <img src={meal.image} alt="" /> 
                <p>{meal.title}</p>
              </Link>
            </div>
        ))}
      
    </div>
  )
}