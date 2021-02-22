//npm import

//local import

const initialState = [];

const bookDetails = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_BOOK_DETAILS":
      return action.bookDetails;
    default:
      return state;
  }
}

export default bookDetails;