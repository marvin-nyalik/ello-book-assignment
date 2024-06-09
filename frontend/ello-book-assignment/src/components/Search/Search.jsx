import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";

import SearchResult from "./SearchResult";

const Backdrop = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 150,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 10,
}));

export default function Search() {
  const { books } = useSelector((state) => state.books);
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  useEffect(() => {
    if (query) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [query, filteredBooks]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Search books..."
        variant="standard"
        className="mb-1 md:mb-2"
        value={query}
        onChange={handleChange}
        InputProps={{
          endAdornment: query && (
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search"
                onClick={handleClear}
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <div>
        {query && (
          <Backdrop>
            <div
              style={{
                width: '90%',
                margin: '0 auto',
                height: '70vh',
                overflowY: 'scroll',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '8px'
              }}
            >
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book, index) => (
                  <SearchResult key={index} book={book}/>
                ))
              ) : (
                <div>
                  No books based on your search
                </div>
              )}
            </div>
          </Backdrop>
        )}
      </div>
    </Box>
  );
}
