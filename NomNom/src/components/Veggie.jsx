import axios from 'axios'
import { useEffect, useState } from 'react'
import './Popular.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'

export default function Veggie() {
  const [veggie, setVeggie] = useState([])

  useEffect(() => { 
    getVeggie() 
  }, [])

  async function getVeggie() {
    const check = localStorage.getItem('veggie')

    if(check) {
      setVeggie(JSON.parse(check))
    } else {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=70be813de0fe4a97a6bc166568830174&number=9&tags=vegetarian`
      const res = await axios.get(url)
      const data = res.data
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
    }
  }

  return (
    <div>
      <h3>Vegetarian Picks</h3>
      <Splide 
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '3rem',
        }}>
        {veggie.map(recipe => (
          <SplideSlide key={recipe.id}>
            <div className="card" key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt="" />
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}