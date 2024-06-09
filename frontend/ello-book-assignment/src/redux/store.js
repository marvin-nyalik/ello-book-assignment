import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./books/booksSlice";
import readingListSlice from "./readingList/readingListSlice";

const store = configureStore({
  reducer: {
    books: booksSlice,
    readingList: readingListSlice,
  },
});

export default store;
