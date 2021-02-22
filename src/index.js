//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

//local impport
import App from './Components/App';
import configureStore, { history } from "./Store/configureStore";
export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);


