import axios from "axios";

import { AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL });
    });
};

// Setup a helper function for config with token
export const tokenConfig = getState => {
  // Get the token from the state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
};
