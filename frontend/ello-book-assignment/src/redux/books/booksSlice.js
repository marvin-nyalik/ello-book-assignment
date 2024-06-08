import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const query = `
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }`;
const encodedQuery = encodeURIComponent(query);

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(
    `http://localhost:4000/?query=${encodedQuery}`
  );
  return response.data.data.books;
});

const initialState = {
  books: [],
  error: null,
  loading: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
