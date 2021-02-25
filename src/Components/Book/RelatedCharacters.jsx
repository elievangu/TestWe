//npm import

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//local import

const RelatedCharacters = ({ book, index }) => {
  return (
    <>
      <Link to={`/character/${index + 1}`} style={{ textDecoration: 'none' }}> 
        <li>{book.characters[index]}</li>
      </Link>
    </>
  );
};

RelatedCharacters.propTypes = {
  book: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};

export default RelatedCharacters;
