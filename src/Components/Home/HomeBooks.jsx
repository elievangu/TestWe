//npm import
import React, { useEffect } from "react";
import PropTypes from "prop-types";

//local import
import BookItem from "./BookItem";
import Loader from '../Loading/Loader'

const HomeBooks = ({ fetchBooks, books }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <h1>BOOKS</h1>
      <ul>
        {books !== undefined ? books.map((book) => (
          <BookItem key={book.isbn} book={book} />
        )) : <Loader />}
      </ul>
    </div>
  );
};

HomeBooks.propTypes = {
  books: PropTypes.object.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default HomeBooks;
