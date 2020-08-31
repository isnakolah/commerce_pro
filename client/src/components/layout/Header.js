import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

const Header = ({ isAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        {isAuthenticated ? (
          <p className="font-weight-bold">you are in</p>
        ) : (
          <p>Log in</p>
        )}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Register <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  // username: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  // username: state.auth.user.username,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
