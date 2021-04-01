import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Films from "./Films/Index";
import Layout from "../components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Films} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
