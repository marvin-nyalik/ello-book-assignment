import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import Books from "./components/Books/Books";
import Layout from "./components/Layout";
import store from "./redux/store";
import theme from "./styles/theme";
import ReadList from "./components/ReadList/ReadList";
import { fetchBooks } from "./redux/books/booksSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Books />
            </Layout>
          }
        />
        <Route
          path="/read-list"
          element={
            <Layout>
              <ReadList />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
