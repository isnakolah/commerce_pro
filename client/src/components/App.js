import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="jumbotron text-center font-weight-bold">
        <p>Works</p>
      </div>
    </Provider>
  );
};

export default App;
