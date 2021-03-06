import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import NetflixApp from "./containers/NetflixApp";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <NetflixApp />
  </Provider>,
  rootElement
);

serviceWorker.unregister();
