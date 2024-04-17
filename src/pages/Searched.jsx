import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import './Searched.css'

export default function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY;

  let params = useParams()
  useEffect(() => {
    getSearched(params.search)
  }, [params.search])

  async function getSearched(name) {

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`
    const res = await axios.get(url)
    const recipes = res.data
    setSearchedRecipes(recipes.results)
  }

  return (
    <div>
      <div className="searched">
      {
        searchedRecipes.map(searchedRecipe => (
          <div key={searchedRecipe.id}>
            <Link to={`/recipe/${searchedRecipe.id}`}>
              <img src={searchedRecipe.image} alt="" />
              <p>{searchedRecipe.title}</p>
            </Link>
          </div>
      ))}
      </div>
    </div>
  )
}