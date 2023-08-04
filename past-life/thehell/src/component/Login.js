import React, { useState } from "react";
import "./Login.css";
import logo from "../images/past-lives-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const notifyA = (error) => {
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  };
  const notifyB = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
  };

  const emailRegex = /^.+@.+\..+$/;

  const postData = () => {
    // checking email
    if (!emailRegex.test(email)) {
      notifyA("invalid email");
      return;
    }
    // Sending data to server
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB(data.message);
          console.log(data);
          localStorage.setItem("jwt", data);
          navigate("/");
        }
      });
  };

  return (
    <div className="login">
      <div>
        <div className="loginform">
          <img className="logo-middle" src={logo} alt="" />
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              name="email "
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            onClick={() => {
              postData();
            }}
            id="login-btn"
            value="Login"
          />
        </div>
        <div className="loginForm2">
          Don't have an account!
          <Link to="/Signup">
            <span style={{ color: "purple", cursor: "pointer" }}>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
