//npm import
import { connect } from "react-redux";

//local import
import CharacterPage from "../../Components/Characters/CharacterPage";
import fetchCharacterDetails from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    character: state.characterDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacterDetails: (id) => {
      dispatch(fetchCharacterDetails(id));
    },
  };
};

const PageCharacter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterPage);

export default PageCharacter;
