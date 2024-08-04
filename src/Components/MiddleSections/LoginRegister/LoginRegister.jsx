import React, { Component } from "react";
import Logo from "../../../images/nav-bar-logo.png";
import "./LoginRegister.css";
import { Link } from "react-router-dom";

class LoginRegister extends Component {
  render() {
    return (
      <div className="background log">
        <div className="login register">
          <form action="" className="form">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input type="submit" value="login" />
            <Link to="forgot-password" className="forgot">
              forgot password
            </Link>
            <p>Don't have any account?</p>
            <Link to="register">register</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
