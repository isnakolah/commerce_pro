import axios from "axios";

import { AUTH_ERROR } from "./types";

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
