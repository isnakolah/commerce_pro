import { GET_LISTINGS } from "./types";

export function getListings(listings) {
  return {
    type: GET_LISTINGS,
    listings,
  };
}
