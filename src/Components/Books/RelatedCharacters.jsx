//npm import

import React from "react";
import PropTypes from "prop-types";

//local import

const RelatedCharacters = ({ book, index, handleRelatedCharacterClick }) => {
  return (
    <div>
      <li onClick={() => handleRelatedCharacterClick()}>
        {book.characters[index]}
      </li>
    </div>
  );
};

RelatedCharacters.propTypes = {
  handleRelatedCharacterClick: PropTypes.func.isRequired,
};

export default RelatedCharacters;
