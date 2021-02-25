//npm import
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//local import

const CharacterItem = ({ character, index }) => {
  return (
    <>
      <Link to={`/character/${index + 1}`} style={{ textDecoration: "none" }}>
        <li>{character.name === "" ? character.aliases[0] : character.name}</li>
      </Link>
    </>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CharacterItem;
