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
    <div>
        <form className="search" action="">
          <FaSearch />
          <input onChange={handleChange} type="text" />
      <Link to={`./searched/${input}`}>
        <button hidden="hidden"></button>
      </Link>
        </form>
    </div>
  )
}

