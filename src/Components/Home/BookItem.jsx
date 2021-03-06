//npm import
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//local import
const BookItem = ({ book, index }) => {
  return (
    <>
      <Link to={`/book/${index + 1}`} style={{ textDecoration: 'none' }}>
        <li>{book.name}</li>
      </Link>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default BookItem;
