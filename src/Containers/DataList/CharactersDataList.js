//npm import
import { connect } from 'react-redux';

//local import
import DataListCharacters from '../../Components/DataList/DataListCharacters';

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const CharactersDataList = connect(mapStateToProps, null)(DataListCharacters);

export default CharactersDataList;