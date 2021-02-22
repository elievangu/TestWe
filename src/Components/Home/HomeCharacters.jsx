//npm import
import React, { useEffect } from "react";
import PropTypes from "prop-types";


//local import
import CharacterItem from "./CharacterItem";

const HomeCharacters = ({ fetchCharacters, characters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div>
      <h1>CHARACTERS</h1>
      <ul>
        {characters.map((character) =>
          character.name !== "" ? (
            <CharacterItem key={character.url} character={character.name} />
          ) : (
            <CharacterItem key={character.url} character={character.aliases} />
          )
        )}
      </ul>
    </div>
  );
};

HomeCharacters.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  characters: PropTypes.object.isRequired,
};

export default HomeCharacters;
