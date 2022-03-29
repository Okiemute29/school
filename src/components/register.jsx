import React, { useRef } from "react";
import login from "../image/banner/1.jpg";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authprovider";

export default function Register() {
  const emailRef = useRef();
  const PasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();

  return (
    <div>
      <div className="loginreg" style={{ backgroundImage: `url(${login})` }}>
        <div className="login">
          <h1>Login</h1>
          <p>
            Already have an accout?
            <Link to="/login">
              <span>log in</span>
            </Link>
          </p>
          <form>
            <label>Email</label>
            <div className="input">
              <input placeholder="Email" ref={emailRef} required />
              <FontAwesomeIcon className="icon" icon={faUser}></FontAwesomeIcon>
            </div>
            <label>Password</label>
            <div className="input">
              <input placeholder="Password" ref={PasswordRef} required />
              <FontAwesomeIcon className="icon" icon={faEye} />
            </div>
            <label>Confirm-Password</label>
            <div className="input">
              <input
                placeholder="Re-Enter Password"
                ref={confirmPasswordRef}
                required
              />
              <FontAwesomeIcon className="icon" icon={faEyeSlash} />
            </div>
            <input type="checkbox" className="checkbox" />
            <label>I agree to the terms and condition</label>
            <button className="login-submit">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
