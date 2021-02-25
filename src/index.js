//npm import
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

//local impport
import BooksHome from "./Containers/Home/BooksHome";
import CharactersHome from "./Containers/Home/CharactersHome";
import PageBook from "./Containers/Book/PageBook";
import PageCharacter from "./Containers/Character/PageCharacter";
import configureStore, { history } from "./Store/configureStore";

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Switch>
            <Route exact path="/">
              <BooksHome />
            </Route>
            <Route path="/books">
              <BooksHome />
            </Route>
            <Route path="/characters">
              <CharactersHome />
            </Route>
            <Route exact path="/book/:id">
              <PageBook />
            </Route>
            <Route path="/character/:id">
              <PageCharacter />
            </Route>
          </Switch>
        </Router>
      </ConnectedRouter>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
