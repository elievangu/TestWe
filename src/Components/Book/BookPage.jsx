//npm import
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { usePromiseTracker } from "react-promise-tracker";

//local import
import RelatedCharacters from "./RelatedCharacters";
import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loading/Loader";

const BookPage = ({ fetchBookDetails, book }) => {
  let { id } = useParams();

  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    fetchBookDetails(id);
  }, []);

  return (
    <div>
      <NavBar />
      {promiseInProgress ? (
        <Loader />
      ) : (
        <>
          <h1>{book.name}</h1>
          <div>
            <p>{book.name}</p>
            <p>{book.authors}</p>
            <p>{book.publisher}</p>
            <p>{book.country}</p>
          </div>
        </>
      )}
    </div>
  );
};

BookPage.propTypes = {
  book: PropTypes.array.isRequired,
  fetchBookDetails: PropTypes.func.isRequired,
};

export default BookPage;
