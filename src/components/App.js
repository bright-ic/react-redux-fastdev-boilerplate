import React from "react";
import { Link } from "react-router-dom";

import List from "./List";

const App = () => (
  <>
    <Link to="/about">About</Link>
    <List />
  </>
);
export default App;
