//npm import
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { usePromiseTracker } from "react-promise-tracker";

//local import
import CharacterItem from "./CharacterItem";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loading/Loader";

const HomeCharacters = ({ fetchCharacters, characters }) => {

  useEffect(() => {
    fetchCharacters();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      <NavBar />
      <h1>CHARACTERS</h1>
      <ul>
        {promiseInProgress ? <Loader /> : (
          characters.map((character, index) => (
            <CharacterItem
              key={character.url}
              character={character}
              index={index}
            />
          ))
        )}
      </ul>
    </div>
  );
};

HomeCharacters.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};

export default HomeCharacters;
