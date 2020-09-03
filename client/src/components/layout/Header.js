import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

const Header = () => {
  const authTest = <h4>Auth passed</h4>;
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand pb-0" href="#">
        <h3 class="mb-0">Auctions</h3>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link pb-0" href="#">
              Active Listings
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link pb-0" href="#">
              All Listings
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link pb-0" href="#">
              Log Out
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pb-0" href="#">
              Log In
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pb-0" href="#">
              Register
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 ">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
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
