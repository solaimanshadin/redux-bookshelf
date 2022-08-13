import { configureStore } from '@reduxjs/toolkit'
import BookReducer from '../redux/BookSlice'

export const store = configureStore({
  reducer: {
    books: BookReducer,
  },
})
