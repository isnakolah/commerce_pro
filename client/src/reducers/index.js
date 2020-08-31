import { combineReducers } from "redux";

import listings from "./listings";
import auth from "./auth";

export default combineReducers({
  listings,
  auth,
});
