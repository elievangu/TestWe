//npm import
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//local import
import rootReducer from "../Reducers/rootReducer";

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  let store = createStore(
    rootReducer(history),
    preloadedState,
    compose(
      composeWithDevTools(
        applyMiddleware(thunkMiddleware, routerMiddleware(history))
      )
    )
  );
  return store
};

export default configureStore;