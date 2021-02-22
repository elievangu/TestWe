//npm import
import React from "react";
import PropTypes from "prop-types";

//local import

const CharacterItem = ({ character }) => {
  return (
    <>
      <li>{character.name}</li>
    </>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
  handleCharacterClick: PropTypes.func.isRequired,
};

export default CharacterItem;
