import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(user));
    setSubmit(true);
  };

  const login = () => {
    axios
      .post("http://localhost:3755/login", user)
      .then((res) => {
        console.log(res.data);

        toast("Login successfully", {
          type: "success",
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch(function (err) {
        toast("invalid credentials", {
          type: "error",
        });
      });
  };

  const validateForm = (user) => {
    const error = {};
    if (!user.email) {
      error.email = "Email id is required!";
    }
    if (!user.email) {
      error.email = "Email id is required!";
    }
    if (!user.password) {
      error.password = "Password is required!";
    }
    if (user.password && !user.reEnterPassword) {
      error.reEnterPassword = "Confirm the Password";
    }
    if (user.reEnterPassword && user.password !== user.reEnterPassword) {
      error.reEnterPassword = "Passwords didn't match!";
    }
    return error;
  };
  return (
    <div className="loginContainer -mt-24">
      <div className="loginWrapper ">
        <div className="loginFormContainer ">
          <div className="loginHeader">
           <i> <h2>Login to Continue</h2></i>
          </div>
          <form action="login" className="loginForm" onSubmit={handleSubmit}>
            <div className="inputElem">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                placeholder="Enter Email Address"
                onChange={handleChange}
                value={user.email}
                name="email"
              />
              <span className="inputError">{formError.email}</span>
            </div>
            <div className="inputElem">
              <label htmlFor="Enter Password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={user.password}
                name="password"
              />
              <span className="inputError">{formError.password}</span>
            </div>
            <div className="inputElem">
              <label htmlFor="Confirm Password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password "
                onChange={handleChange}
                value={user.reEnterPassword}
                name="reEnterPassword"
              />
              <span className="inputError">{formError.reEnterPassword}</span>
            </div>
            <div className="loginButtonDiv">
              <button
                className="loginButton"
                onClick={() => {
                  login();
                }}
              >
                Login
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
        <div className="loginImage  ">
          <img className=" " src="./admin.gif" alt="" />
        </div>
      </div>
    </div>
  );
};
