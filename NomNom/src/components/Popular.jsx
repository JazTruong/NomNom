import axios from 'axios'
import { useEffect, useState } from 'react'
import './Popular.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'

export default function Popular() {
  const [popular, setPopular] = useState([])

  useEffect(() => { 
    getPopular() 
  }, [])

  async function getPopular() {
    const check = localStorage.getItem('popular')
    if(check) {
      setPopular(JSON.parse(check))
    } else {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=70be813de0fe4a97a6bc166568830174&number=9`
      const res = await axios.get(url)
      const data = res.data
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }
  }

  return (
    <div className='wrapper'>
      <h3>Popular Picks</h3>
      <Splide 
        options={{
          perPage: 4,
          arrows: false,
          pagination:false,
          drag: 'free',
          gap: '3rem',
        }}>
        {popular.map(recipe => (
          <SplideSlide key={recipe.id}>
            <div className='card' key={recipe.id}>
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
