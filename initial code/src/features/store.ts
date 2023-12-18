import { configureStore } from '@reduxjs/toolkit'
import { MovieSlice } from './movieSlice'


export const store = configureStore({
  reducer: {
    movie: MovieSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

