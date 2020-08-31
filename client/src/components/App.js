import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "../store";
import Login from "./accounts/Login";
import ListingPage from "./listings/ListingPage";
import PrivateRoute from "./common/PrivateRoute";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container pt-4">
          <Switch>
            <PrivateRoute exact path="/" component={ListingPage} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
