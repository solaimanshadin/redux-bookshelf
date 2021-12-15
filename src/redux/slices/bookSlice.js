import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import books from "../../fakeData/books.json";

//first,create the thunk
export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  const response = await fetch(
    "https://redux-book-shelf.herokuapp.com/books"
  ).then((res) => res.json());
  return response.data;
});

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    discover: [],
    readingList: [],
    finishedList: [],
    status: "idle",
  },
  reducers: {
    addToReadingList: (state, action) => {
      state.readingList.push(action.payload);
    },
    removeFromReadingList: (state, action) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== action.payload
      );
    },
    addToFinishedList: (state, action) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== action.payload.id
      );
      state.finishedList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.discover = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const { addToReadingList, removeFromReadingList, addToFinishedList } =
  bookSlice.actions;

export default bookSlice.reducer;
