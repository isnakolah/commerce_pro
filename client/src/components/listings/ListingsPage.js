import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getListings } from "../../redux/actions/listings";
import ListingCard from "./ListingCard";

const ListingPage = ({ getListings, listings }) => {
  useEffect(() => {
    getListings();
  }, [getListings]);
  return (
    <div>
      <h1>Listings</h1>
      <div className="row">
        {listings.map(listing => (
          <ListingCard listing={listing} key={listing.id} />
        ))}
      </div>
    </div>
  );
};

ListingPage.propTypes = {
  listings: PropTypes.array.isRequired,
  getListings: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listings: state.listings.listings,
});

export default connect(mapStateToProps, { getListings })(ListingPage);
