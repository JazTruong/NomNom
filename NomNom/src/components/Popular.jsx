import axios from 'axios'
import { useEffect, useState } from 'react'
import './Popular.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'

export default function Popular() {
  const [popular, setPopular] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => { 
    getPopular() 
  }, [])

  async function getPopular() {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
      const res = await axios.get(url)
      const data = res.data
      setPopular(data.recipes)
  }

  return (
    <div className='wrapper'>
      <p className='popular'>FIND SOMETHING TASTY TO COOK TODAY!</p>
      <Splide 
        options={{
          perPage: 4,
          arrows: false,
          pagination:false,
          drag: 'free',
          gap: '2rem',
        }}>
        {popular.map(recipe => (
          <SplideSlide key={recipe.id}>
            <div className='card' key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt="" />
                <p>{recipe.title}</p>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
