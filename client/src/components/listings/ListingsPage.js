import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getListings } from "../../redux/actions/listings";

const ListingPage = ({ getListings, listings, name }) => {
  useEffect(() => {
    getListings();
  }, [getListings]);
  return (
    <div>
      <h1>This is the ListingPage</h1>
    </div>
  );
};

ListingPage.propTypes = {
  listings: PropTypes.array.isRequired,
  getListings: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listings: state.listings.listings,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getListings })(ListingPage);
