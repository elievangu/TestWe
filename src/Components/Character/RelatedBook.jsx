//npm import
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//local import

const RelatedBooks = ({ character, index }) => {
  return (
    <>
      <Link to={`/book/${index + 1}`} style={{ textDecoration: 'none' }}>
        <li>{character.books[index]}</li>
      </Link>
    </>
  );
};

RelatedBooks.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default RelatedBooks;
