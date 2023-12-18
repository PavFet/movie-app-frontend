import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { defaultState, MovieState } from './types/movieType'
import { IUser } from '../plugins/http'


const initialState = {
  defaultState,
  movieData: { ...defaultState},
  fetchMovieError: '',
  userData: {
    username: '',
    password: '',
    movieList: [{...defaultState}],
  },
}

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action:PayloadAction<MovieState>) => {
      const movieData = action.payload
      state.movieData = movieData
    },
    setFetchMovieError: (state, action:PayloadAction<string>) => {
      state.fetchMovieError = action.payload
    },
    setUser: (state, action:PayloadAction<IUser>) => {
      const userData = action.payload
      state.userData = userData
    },
    logOut: (state) => {
      state.userData = initialState.userData
    }
  }
})

export const { setMovie, setFetchMovieError, setUser, logOut } = MovieSlice.actions
