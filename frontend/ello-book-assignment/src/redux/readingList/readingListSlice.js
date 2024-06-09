import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
}

const readingListSlice = createSlice({
  name: 'readingList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },

    removeBook: (state, action) => {
      state.bookList = state.bookList.filter(book => book.title !== action.payload.title)
    }
  }
})

export const { addBook, removeBook } = readingListSlice.actions;
export default readingListSlice.reducer;
