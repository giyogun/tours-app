import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Review from "./components/Reviews/Review";
import Tours from "./components/Tours/Tours";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Tours />
        </Route>
        <Route path="/tours">
          <Tours />
        </Route>
        <Route path="/reviews">
          <Review />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
