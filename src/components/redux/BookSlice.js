import { createSlice, createAsyncThunk } from '@reduxjs/toolkit/'
import Descover from '../../fakeData/books.json'

export const LoadData = createAsyncThunk('books/Descoverdata', async () => {
  const res = await (
    await fetch('https://redux-book-shelf.herokuapp.com/books')
  ).json()
  const data = await res.data
  console.log(data)
  return data
})

export const BookSlice = createSlice({
  name: 'books',
  initialState: {
    StraingData: [],
    DiscoverCollection: [],
    ReadingCollection: [],
    FinisheBookCollection: [],
  },
  reducers: {
    AddtoReadingList: (state, { payload }) => {
      state.ReadingCollection = [...state.ReadingCollection, payload]
    },
    RemoveFromReadingList: (state, { payload }) => {
      state.ReadingCollection = state.ReadingCollection.filter(
        (book) => book.id !== payload.id,
      )
    },
    FinishedBook: (state, { payload }) => {
      state.ReadingCollection = state.ReadingCollection.filter(
        (book) => book.id !== payload.id,
      )

      state.FinisheBookCollection = [...state.FinisheBookCollection, payload]
    },
  },

  extraReducers: (builder) => {
    builder.addCase(LoadData.fulfilled, (state, action) => {
      state.DiscoverCollection = action.payload
    })
  },
})

// actinos

export const {
  AddtoReadingList,
  RemoveFromReadingList,
  FinishedBook,
} = BookSlice.actions

// reducer

export default BookSlice.reducer
