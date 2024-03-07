import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Picked.css'

export default function Picked() {
  const [dish, setDish] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => { 
    getPicked() 
  }, [])

  async function getPicked() {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`
    const res = await axios.get(url)
    const data = res.data
    setDish(data.recipes[0])
  }

  return (
    <div className='picked'>

      <div className='picked-dish'>  
        <p>PICK OF THE DAY</p>
        
        <div className='picked-info'>
          <h2>{dish.title}</h2>
          <Link to={`/recipe/${dish.id}`}>
            <button>VIEW RECIPE</button>
          </Link> 
        </div> 

      </div>

      <img src={dish.image} alt="" />

    </div>
  )
}