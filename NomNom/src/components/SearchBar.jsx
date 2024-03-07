import { useState } from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SearchBar() {

  const [input, setInput] = useState("")

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <div className='search-bar'>
      <form className="form-search" action="">
        <FaSearch />
        <input onChange={handleChange} type="text" placeholder='Quick search'/>
        <Link to={`/searched/${input}`}>
          <button hidden="hidden"></button>
        </Link>
      </form>
    </div>
  )
}

