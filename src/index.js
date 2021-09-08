import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

//persist gate
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  // provider is react-redux and by wrapping the app inside of it
  // we can access its methods and the store of stataes
  // when passing store to the provider we will be giving redux a context to the whole app
  // so we can get dispatch actions as we want
  <Provider store={store}>
    <BrowserRouter>
      {/* wrapping the app with persist gate */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
