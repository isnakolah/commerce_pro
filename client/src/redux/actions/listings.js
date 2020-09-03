import axios from "axios";

import { GET_LISTINGS } from "./types";
import { tokenConfig } from "./auth.js";

export const getListings = () => (dispatch, getState) => {
  axios
    .get("/api/listings/", tokenConfig(getState))
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_LISTINGS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
