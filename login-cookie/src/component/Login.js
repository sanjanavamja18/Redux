import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Login Page</h1>
        <h4>Welcome Back!</h4>
        <div className="form-group row">
          <input className="input" type="text" placeholder="Email" />
        </div>
        <div className="form-group row">
          <input className="input" type="password" placeholder="Password" />
        </div>
        <div className="form-group row">
          <button className="btn" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
