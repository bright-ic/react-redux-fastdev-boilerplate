import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch
} from "react-router-dom";

import App from "../App";
import About from "../About";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
  </Switch>
);

export default AppRoutes;
