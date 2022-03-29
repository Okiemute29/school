import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar-menu">
          <ul>
            <Link to="/provinces">
              <li>
                <a href="#">Provinces</a>
              </li>
            </Link>
            <Link to="/school">
              <li>
                <a href="#">Schools</a>
              </li>
            </Link>
            <Link to="/programs">
              <li>
                <a href="#">Programs</a>
              </li>
            </Link>
            <Link to="/scholarship">
              <li>
                <a href="#">Scholarshps</a>
              </li>
            </Link>
            <Link to="/exams">
              <li>
                <a href="#">Exams</a>
              </li>
            </Link>
            <Link to="/news">
              <li>
                <a href="#">News</a>
              </li>
            </Link>
          </ul>
          <Link to="/login">
            <button className="navbar-btn">Login/Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
