import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import { createStore, combineReducers } from "redux"; //STEP 1
import { Provider } from "react-redux"; // STEP 2
import { compose } from "redux";
import authReducer from "./store/reducers/author"; //STEP 2
import authorsReducer from "./store/reducers/authors"; // STEP 2

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  rootAuth: authReducer,
  rootAuthors: authorsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
); //STEP 4
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
