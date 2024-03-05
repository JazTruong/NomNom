import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Cuisine.css'

export default function Cuisine() {

  const [cuisines, setCuisines] = useState([])
  let params = useParams()

  useEffect(() => {
    getCuisine(params.type)
    console.log(params.type)
  }, [params.type])

  async function getCuisine(country) {

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=70be813de0fe4a97a6bc166568830174&cuisine=${country}`
    const res = await axios.get(url)
    const recipes = res.data
    setCuisines(recipes.results)
  }

  return (
    <div className="cuisine-card">
        {
          cuisines.map(cuisine => (
            <div key={cuisine.id}>
              <img src={cuisine.image} alt="" /> 
              <h4>{cuisine.title}</h4>
            </div>
        ))}
      
    </div>
  )
}