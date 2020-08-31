import { GET_LISTINGS } from "../actions/types";

const initialState = {
  listings: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return {
        ...state,
        listings: action.payload,
      };
  }
}
