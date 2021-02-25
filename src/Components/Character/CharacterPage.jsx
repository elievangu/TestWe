//npm import
import React, { useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { usePromiseTracker } from "react-promise-tracker";

//local import
import RelatedBook from "./RelatedBook";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loading/Loader";

const CharacterPage = ({ fetchCharacterDetails, character }) => {
  let { id } = useParams();

  const { promiseInProgress } = usePromiseTracker();
  useEffect(() => {
    fetchCharacterDetails(id);
  }, []);

  return (
    <div>
      <NavBar />
      {promiseInProgress ? (
        <Loader />
      ) : (
        <>
          <h1>
            {character.name !== "" ? character.name : character.aliases[0]}
          </h1>
          <div>
            <p>Gender: {character.gender}</p>
            <p>Culture: {character.culture}</p>
          </div>
          <h2>Related books</h2>
          <div></div>
        </>
      )}
    </div>
  );
};

CharacterPage.propTypes = {
  fetchCharacterDetails: PropTypes.func.isRequired,
};

export default CharacterPage;
