import React, { useState } from "react";
import logo from "../images/past-lives-logo.png";
import "./Signup.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifyA = (error) => {
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  };
  const notifyB = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
  };

  const emailRegex = /^.+@.+\..+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const postData = () => {
    if (!emailRegex.test(email)) {
      notifyA("invalid email");
      return;
    } else if (!passwordRegex.test(password)) {
      notifyA(
        "Must be at least 8 characters long, Must contain at least one uppercase letter, Must contain at least one lowercase letter Must contain at least one digit"
      );
      return;
    }
    // Sending data to server
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
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
          navigate("/login");
        }
        console.log(data);
      });
  };

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <img className="logo-middle" src={logo} alt="" />
          <p className="logInPara">
            Please Sign up first <br /> to get full controll over your profile
          </p>
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
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="fullname"
              value={name}
              id="fullname"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              id="username"
              placeholder="Username"
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
          <p
            className="logInPara"
            style={{ fontSize: "15px", margin: "3px 0px", padding: "7px 0" }}
          >
            By signing up, you agree to our Terms , <br /> privacy policy and
            cookies policy.
          </p>
          <input
            type="submit"
            id="submit-btn"
            onClick={() => {
              postData();
            }}
            value="Sign up"
          />
        </div>

        <div className="form2">
          <p>
            Already have an account? then{" "}
            <Link to="/Login">
              <span style={{ color: "purple", cursor: "pointer" }}>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
