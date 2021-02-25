//npm import
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { usePromiseTracker } from "react-promise-tracker";
//local import
import BookItem from "./BookItem";
import Loader from "../Loading/Loader";
import NavBar from "../NavBar/NavBar";

const HomeBooks = ({ fetchBooks, books }) => {
  
  useEffect(() => {
    fetchBooks();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      <NavBar />
      <h1>BOOKS</h1>
      <ul>
        {promiseInProgress ? <Loader /> : (
          books.map((book, index) => <BookItem key={book.isbn} book={book} index={index}/>)
        )}
      </ul>
    </div>
  );
};

HomeBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default HomeBooks;
