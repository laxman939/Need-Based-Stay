import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "../src/Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
