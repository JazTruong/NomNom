import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  useEffect(() => {
    getSearched(params.search)
    console.log(params.search)
  }, [params.search])

  async function getSearched(name) {

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=fd0de3b0df5c44efa33bf549d9059ad1&query=${name}`
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
            <img src={searchedRecipe.image} alt="" />
            <h4>{searchedRecipe.title}</h4>
          </div>
      ))}
      </div>
    </div>
  )
}