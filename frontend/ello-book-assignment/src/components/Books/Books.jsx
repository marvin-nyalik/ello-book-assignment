import React from "react";
import { useSelector } from "react-redux";

import BookCard from "./BookCard";

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
      <h2 className="text-xl font-bold mb-4">Books</h2>
      <div className="flex flex-col md:flex-row gap-4">
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
