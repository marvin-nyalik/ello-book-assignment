import React from "react";
import { useSelector } from "react-redux";

import BookCard from "./BookCard";
import Search from "../Search/Search";

const Books = () => {
  const { books, error, loading } = useSelector((state) => state.books);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!books) {
    return <div>No books</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Search />
      <div className="flex flex-col md:flex-row md:flex-wrap gap-12 justify-center">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.coverPhotoUrl} book={book}/>
          ))
        ) : (
          <div>No books</div>
        )}
      </div>
    </div>
  );
};

export default Books;
