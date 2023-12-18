import React from 'react'
import './searchFilmInput.scss'

const SearchFilmInput = () => {
  return (
    <div className='search__block'>
      <form action="">
        <input 
          type="text" 
          placeholder='Search film'
        />
        <button>&#9740;</button>
      </form>
    </div>
  )
}

export default SearchFilmInput