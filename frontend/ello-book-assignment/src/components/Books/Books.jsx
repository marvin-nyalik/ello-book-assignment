import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import BookCard from "./BookCard";
import Search from "../Search/Search";
import Loading from "../Loading";

const Books = () => {
  const theme = useTheme();
  const { books, error, loading } = useSelector((state) => state.books);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!books) {
    return <div>No books</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div
        className={`flex w-full ${
          isSmallScreen ? "justify-center" : "justify-between items-center"
        }`}
      >
        {!isSmallScreen && (
          <h2
            className="font-semibold text-xl"
            sx={{ color: theme.palette.primary.steelBlue }}
          >
            BOOKS
          </h2>
        )}
        <Search />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-12 justify-center">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.coverPhotoUrl} book={book} />)
        ) : (
          <div>No books</div>
        )}
      </div>
    </div>
  );
};

export default Books;
