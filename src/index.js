import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store from "./redux/store"

ReactDOM.render(
  // provider is react-redux and by wrapping the app inside of it
  // we can access its methods and the store of stataes
  // when passing store to the provider we will be giving redux a context to the whole app
  // so we can get dispatch actions as we want
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
