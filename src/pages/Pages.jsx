
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Searched from './Searched'
import Recipe from './Recipe'
import Meals from './Meals'
import CaloriePlan from './CaloriePlan'

export default function Pages() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:type" element={<Meals />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path='/planner/:calorie/day' element={<CaloriePlan />} />
      </Routes>    
    </div>
  )
}
