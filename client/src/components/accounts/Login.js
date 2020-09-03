import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login } from "../../redux/actions/auth";
import Input from "../common/Input";

const Login = ({ login }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;

  const onChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
