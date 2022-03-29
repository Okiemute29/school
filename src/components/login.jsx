import React from "react";
import login from "../image/banner/1.jpg";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="loginreg" style={{ backgroundImage: `url(${login})` }}>
        <div className="login">
          <h1>Login</h1>
          <p>
            Don't have an account yet?
            <Link to="/register">
              <span>Sign up for free</span>
            </Link>
          </p>
          <form>
            <label>Email</label>
            <input placeholder="Email" />
            <label>Password</label>
            <input placeholder="Password" />
            <input type="checkbox" className="checkbox" />
            <label>Remember Me</label>
            <button className="login-submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
