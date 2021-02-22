//npm import
import React from "react";
import PropTypes from "prop-types";

//local import
const BookItem = ({ book }) => {
  return (
    <>
      <li>{book.name}</li>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookClick: PropTypes.func.isRequired,
};

export default BookItem;
