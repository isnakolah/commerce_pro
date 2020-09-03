import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            name="confirmation"
            placeholder="Confirm Password"
          />
        </div>
        <input class="btn btn-primary" type="submit" value="Register" />
      </form>
      Already have an account? Login here.
    </div>
  );
};

export default Register;
