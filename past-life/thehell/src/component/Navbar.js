import React from "react";
import logo from "../images/past-lives-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav ">
            <Link to="/Home">
              <li className="nav-link px-3 ">Home</li>
            </Link>
            <Link to="/Login">
              <li className="nav-link px-3 ">Login</li>
            </Link>

            <Link to="/Signup">
              <li className="nav-link px-3 ">Sign up</li>
            </Link>

            <Link to="/Myprofile">
              <li className="nav-link px-3 ">My Profile</li>
            </Link>
            <Link to="/Createpost">
              <li className="nav-link px-3 ">Make a Post!</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
