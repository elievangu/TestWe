//npm import
import { connect } from 'react-redux';

//local import
import HomeCharacters from '../../Components/Home/HomeCharacters';

import { fetchCharacters } from '../../Actions/index';

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: () => {
      dispatch(fetchCharacters());
    }
  }
}

const CharactersHome = connect(mapStateToProps, mapDispatchToProps)(HomeCharacters);

export default CharactersHome;