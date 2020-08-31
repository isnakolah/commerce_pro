import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getListings } from "../../actions/listings";

const ListingPage = ({ getListings, listings }) => {
  useEffect(() => {
    getListings();
  }, []);
  return (
    <div>
      <h1>This is the ListingPage</h1>
      {listings}
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
