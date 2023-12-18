import React from 'react'
import './movieCard.scss'
import MovieRating from './movieRating/MovieRating'
import MovieDiscExtension from './movieDiscExtension/MovieDiscExtension'

const MovieCard = (props: any) => {
  const [openMovieExtension, setOpenMovieExtension] = React.useState(false)

  return (
    <div className="movie__card">
      <div className="movie__poster">
        <img src={props.Poster} alt={props.Title} />
      </div>
      <div className="movie__disciption">
        <div className="movie__title">
          <h3>{props.Title} ({props.Year})</h3>
        </div>
        
        <div className="movie__duration__genre">
          <span>{props.Runtime} | {props.Genre}</span>
        </div>

        <div className="movie__rating">
          <MovieRating rating={props.imdbRating}></MovieRating>
        </div>

        <div className="movie__actors">
          <p>Cast: {props.Actors}</p>
        </div>

        <div className="movie__plot">
          <p>Plot: {props.Plot}</p>
        </div>

        <div className="movie__disc__expansion">
          <button 
            onClick={() => setOpenMovieExtension(!openMovieExtension)}
            className={openMovieExtension ? 'arrow--up' : 'arrow--down'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--expand-more ipc-icon--inline ipc-link__icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path opacity=".87" fill="none" d="M24 24H0V0h24v24z"></path><path d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"></path></svg>
          </button>
          <div className={openMovieExtension ? "animation--showUp" : ''}>
            {openMovieExtension ? <MovieDiscExtension {...props}></MovieDiscExtension> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard

