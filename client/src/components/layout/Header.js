import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand" href="/">
        <h3 className="mb-0">Auctions</h3>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Active Listings
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="/listingDetail">
              All Listings
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Log Out
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
};

Header.propTypes = {
  // username: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  // username: state.auth.user.username,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
