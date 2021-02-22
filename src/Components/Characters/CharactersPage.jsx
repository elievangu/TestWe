//npm import
import React, { useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";

//local import
import RelatedBook from "./RelatedBook";

const CharacterPage = ({ fetchCharacterDetails, character }) => {
  let { id } = useParams();

  useEffect(() => {
    fetchCharacterDetails(id);
  });

  return (
    <div>
      <h1>{character.name}</h1>
      <div>
        <p>{character.gender}</p>
      </div>
      <div>
        {character.books.map((book, index) => (
          <RelatedBook key={index} character={character} index={index} />
        ))}
      </div>
    </div>
  );
};

CharacterPage.propTypes = {
  character: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleRelatedBookClick: PropTypes.func.isRequired,
};

export default CharacterPage;
