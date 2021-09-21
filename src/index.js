import React from "react";
import ReactDOM from "react-dom";

// this line is to combine react with redux
import { Provider } from "react-redux";
// this is to create a store as before we have worked on
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
