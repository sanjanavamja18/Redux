import React from "react";
import "./Login.css";

const Login = () => {
  const setLogin = () => {
    console.log("Login Succsefully");
  };
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
        </div>{" "}
        <br></br>
        <div className="form-group row">
          <button className="btn" type="submit">
            Log In
          </button>
        </div>
        <br></br>
        <div className="form-group row">
          <button className="btn" type="submit" onClick={setLogin}>
            Log In With Instagram
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
