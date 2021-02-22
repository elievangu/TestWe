//npm import
import React from 'react';
import PropTypes from 'prop-types';
import Data from 'react-data-pagination';
import HomeCharacters from '../Home/HomeCharacters';

//local import

const DataListCharacters = ({ characters }) => {
  return (
    <div>
      <Data
        dataset={characters}
        offset={0}
        rows={10}
        dataList={<HomeCharacters/>}
        wrapper="div"
        wrapperCssClass=""
        buttonCssClass="button"
      />
    </div>
  )
}

DataListCharacters.propTypes = {
  characters: PropTypes.object.isRequired

}

export default DataListCharacters;

