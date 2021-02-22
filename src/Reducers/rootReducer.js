//npm import
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//local import
import bookDetails from './bookDetails';
import books from './books';
import characterDetails from './characterDetails';
import characters from './characters';

const RootReducer = history => combineReducers({
  router: connectRouter(history),
  bookDetails,
  books,
  characterDetails,
  characters

})

export default RootReducer;