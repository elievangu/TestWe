//npm import
import React, { useEffect } from "react";
import PropTypes from "prop-types";

//local import
import RelatedCharacters from "./RelatedCharacters";
import { useParams } from "react-router";

const BookPage = ({ fetchBookDetails, book }) => {
  let { id } = useParams();

  useEffect(() => {
    fetchBookDetails(id);
  });

  return (
    <div>
      <h1>{book.tilte}</h1>
      <div>
        <p>book.name</p>
        <p>book.authors[0]</p>
        <p>book.publisher</p>
        <p>book.country</p>
      </div>
      <div>
        {book.characters.map((character, index) => (
          <RelatedCharacters key={index} book={book} index={index} />
        ))}
      </div>
    </div>
  );
};

BookPage.propTypes = {
  book: PropTypes.object.isRequired,
  fetchBookDetails: PropTypes.func.isRequired
};

export default BookPage;
