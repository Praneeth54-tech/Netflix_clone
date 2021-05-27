import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Store from './app/store'
ReactDom.render(
  <Provider store = {Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
