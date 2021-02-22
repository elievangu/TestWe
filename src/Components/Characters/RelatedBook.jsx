//npm import
import React from "react";
import PropTypes from "prop-types";

//local import

const RelatedBook = ({ character, index, handleRelatedBookClick }) => {
  return (
    <div>
      <li onClick={() => handleRelatedBookClick()}>{character.books[index]}</li>
    </div>
  );
};

RelatedBook.propTypes = {
  handleRelatedBookClick: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default RelatedBook;
