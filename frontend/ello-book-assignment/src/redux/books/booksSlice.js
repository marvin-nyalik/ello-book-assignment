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

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/",
        {
          query: query,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

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
        state.books = action.payload.books;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
