import React from 'react'
import './main.scss'
import SearchFilmInput from './searchFilm/SearchFilmInput'
import MovieCard from './movieCard/MovieCard'
import { useAppSelector } from '../../features/hooks'


const Main: React.FC = () => {
  const movie = useAppSelector((state) => state.movie.movieData)
  const error = useAppSelector((state) => state.movie.fetchMovieError)
  
  return (
    <>
      <div className='main__block'>
        <p >Log in to create your list of favorite movies.</p>
      </div>
      <SearchFilmInput></SearchFilmInput>
      {
        movie.Actors  ? <MovieCard {...movie}></MovieCard> : ''
      }
      {
        error ? <span className='error'>{error}</span> : ''
      }
    </>
  )
}

export default Main