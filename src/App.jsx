import './App.css'
import Category from './components/Category'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Pages from './pages/Pages'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to={'/'} element={<Home />}>
        <div className='logo'>
        <img src="/logo.png" alt="" />
        </div>
      </Link>
      <SearchBar />
      <Category />
      <Pages />
    </>
  )
}

export default App
