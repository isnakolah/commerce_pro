import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "../redux/store";
import Login from "./accounts/Login";
import ListingsPage from "./listings/ListingsPage";
import PrivateRoute from "./common/PrivateRoute";
import Header from "./layout/Header";
import { loadUser } from "../redux/actions/auth";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <div className="container pt-4">
          <Switch>
            <Route exact path="/" component={ListingsPage} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
