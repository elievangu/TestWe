//npm import
import React from "react";
import Data from "react-data-pagination";
import PropTypes from "prop-types";
import HomeBooks from "../../Containers/Home/BooksHome";

//local import

const DataListBooks = ({ books }) => {
  return (
    <div>
      <Data
        dataset={books}
        offset={0}
        rows={10}
        dataList={<HomeBooks />}
        wrapper="div"
        wrapperCssClass=""
        buttonCssClass="button"
      />
    </div>
  );
};

DataListBooks.propTypes = {
  books: PropTypes.object.isRequired
};

export default DataListBooks;
