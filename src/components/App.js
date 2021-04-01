import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Films from "./Films/Index";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Films} />
  </BrowserRouter>
);

export default App;
