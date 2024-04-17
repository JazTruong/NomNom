import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.css'

export default function Recipe() {

  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")
  const apiKey = import.meta.env.VITE_API_KEY;

  let params = useParams()
  useEffect(() => {
    getRecipe()
  }, [params.id])

  async function getRecipe() {

    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
    const res = await axios.get(url)
    const detailData = res.data
    setDetails(detailData)
  }

  function handleInstructions() {
    setActiveTab("instructions")
  }
  function handleIngredients() {
    setActiveTab("ingredients")
  }

  return (
    <div className='recipe-wrapper'>
      
      <div className='recipe-info'>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      </div>
      
      <div className='recipe-instructions'>
        <div className='btn'>
          <button 
            className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={handleInstructions}>Instructions</button>
          <button 
            className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={handleIngredients}>Ingredients</button>
        </div>

          {activeTab === 'instructions' && (
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          )}

          {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          )}
      </div>
    </div>
  )
}