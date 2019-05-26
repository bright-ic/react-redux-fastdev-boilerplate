import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store, { history } from "./redux/StoreConfiguration";
import style from "./main.css";

/* window.store = store;
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
); */
import Root from "./components/Root";
render(
  <BrowserRouter>
    <Root store={store} history={history} />
  </BrowserRouter>,
  document.getElementById("root")
);
