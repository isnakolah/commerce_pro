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
        <Input
          label="Username"
          name="username"
          value={username}
          onChange={onChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
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
