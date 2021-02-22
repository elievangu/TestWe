//npm import

//local import

const initialState = [];

const characterDetails = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_CHARACTER_DETAILS":
      return action.characterDetails;
    default:
      return state;
  }
}

export default characterDetails;