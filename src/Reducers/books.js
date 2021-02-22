//npm import

//local import

const initialState = [];

const books = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_BOOKS_LIST":
      return action.booksList;
    default:
      return state;
  }
}

export default books;