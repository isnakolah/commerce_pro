import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import store from "../redux/store";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import ListingsPage from "./listings/ListingsPage";
import ListingDatailPage from "./listings/ListingDetailPage";
import NotFoundPage from "./notfoundpage/NotFoundPage";
import Header from "./layout/Header";
import { loadUser } from "../redux/actions/auth";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Header />
      <div className="container pt-4">
        <Switch>
          <Route exact path="/" component={ListingsPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/listingDetail" component={ListingDatailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
