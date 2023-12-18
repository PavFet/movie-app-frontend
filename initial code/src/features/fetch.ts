import { apiKey } from '../config/apiKey'
import { setMovie, setFetchMovieError } from './movieSlice'
import { defaultState } from './types/movieType'

export const fetchMovie = (movie: string, disp: any, year?: any) => {
  

  const fetchData = async () => {
     
    try {
      const res = await fetch(`https://www.omdbapi.com/?t=${movie}&type=movie&y=${year}&apikey=${apiKey}`)
      const json = await res.json();
      if (json.Response !== "False") {
        disp(setMovie(json))
        disp(setFetchMovieError(''))
      } else {
        disp(setFetchMovieError('Movie not found'))
        disp(setMovie(defaultState))
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
}