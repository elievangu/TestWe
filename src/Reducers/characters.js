//npm import

//local import

const initialState = [];

const characters = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_CHARACTERS_LIST":
      return action.charactersList;
    default:
      return state;
  }
}

export default characters;