//npm import
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

//local import

//Plain object actions

export const requestBooksList = () => {
  return {
    type: "REQUEST_BOOKS_LIST",
  };
};

export const receiveBooksList = (datas) => {
  return {
    type: "RECEIVE_BOOKS_LIST",
    booksList: datas,
  };
};
export const requestCharactersList = () => {
  return {
    type: "REQUEST_CHARACTERS_LIST",
  };
};

export const receiveCharactersList = (datas) => {
  return {
    type: "RECEIVE_CHARACTERS_LIST",
    charactersList: datas,
  };
};

export const requestBookDetails = (id) => {
  return {
    type: "REQUEST_BOOK_DETAILS",
    id,
  };
};

export const receiveBookDetails = (datas) => {
  return {
    type: "RECEIVE_BOOK_DETAILS",
    bookDetails: datas,
  };
};

export const requestCharacterDetails = (id) => {
  return {
    type: "REQUEST_CHARACTER_DETAILS",
    id,
  };
};

export const receiveCharacterDetails = (datas) => {
  return {
    type: "RECEIVE_CHARACTER_DETAILS",
    characterDetails: datas,
  };
};


export const errorStatus = (error) => {
  return {
    type: "ERROR_STATUS",
    error,
  };
};

//Asynchronous actions

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(requestBooksList());
    return trackPromise(
      axios
        .get(`https://anapioficeandfire.com/api/books`)
        .then((json) => {
          const { data } = json;

          dispatch(receiveBooksList(data));
          console.log(json.data);
        })
        .catch((error) => {
          dispatch(errorStatus(error));
        })
    );
  };
};

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(requestCharactersList());
    return trackPromise(
      axios
        .get(`https://anapioficeandfire.com/api/characters`)
        .then((json) => {
          const { data } = json;

          dispatch(receiveCharactersList(data));
          console.log(json.data);
        })
        .catch((error) => {
          dispatch(errorStatus(error));
        })
    );
  };
};

export const fetchCharacterDetails = (id) => {
  return (dispatch) => {
    dispatch(requestCharacterDetails(id));
    return trackPromise(
      axios
        .get(`https://anapioficeandfire.com/api/characters/${id}`)
        .then((json) => {
          const { data } = json;

          dispatch(receiveCharacterDetails(data));
          console.log(json.data);
        })
        .catch((error) => {
          dispatch(errorStatus(error));
        })
    );
  };
};
export const fetchBookDetails = (id) => {
  return (dispatch) => {
    dispatch(requestBookDetails(id));
    return trackPromise(
      axios
        .get(`https://anapioficeandfire.com/api/books/${id}`)
        .then((json) => {
          const { data } = json;

          dispatch(receiveBookDetails(data));
          console.log(json.data);
        })
        .catch((error) => {
          dispatch(errorStatus(error));
        })
    );
  };
};
