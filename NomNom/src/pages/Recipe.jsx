import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Recipe() {

  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")
  let params = useParams()

  useEffect(() => {
    getRecipe()
  }, [params.id])

  async function getRecipe() {

    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=fd0de3b0df5c44efa33bf549d9059ad1`
    const res = await axios.get(url)
    const detailData = res.data
    setDetails(detailData)
    console.log(detailData)
  }

  function handleInstructions() {
    setActiveTab("instructions")
  }
  function handleIngredients() {
    setActiveTab("ingredients")
  }

  return (
    <div className='recipe-wrapper'>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <p>{details.instructions}</p>
        <p>{details.summary}</p>
      </div>
      <div>
        <button onClick={handleInstructions}>Instructions</button>
        <button onClick={handleIngredients}>Ingredients</button>
      </div>
    </div>
  )
}