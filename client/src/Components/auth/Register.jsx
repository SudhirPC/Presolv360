import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
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

const register = () => {
  axios
    .post("http://localhost:3755/register", user)
    .then((res) => {
      // console.log(res.data);

      toast("Registered successfully", {
        type: "success",
      });
      setTimeout(() => {
        navigate("/login");
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
      <div className="loginWrapper">
        <div className="loginFormContainer">
          <div className="loginHeader">
            <i><h2>Registration Page</h2></i>
          </div>
          <form action="login" className="loginForm" onSubmit={handleSubmit}>
            <div className="inputElem">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                value={user.name}
                name="name"
              />
            </div>
            <div className="inputElem">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                placeholder="Enter Email Address"
                onChange={handleChange}
                value={user.email}
                name="email"
              />
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder=" Enter Password"
                onChange={handleChange}
                value={user.password}
                name="password"
              />
            </div>
            <div className="inputElem">
              <label htmlFor="confirm password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={user.reEnterPassword}
                name="reEnterPassword"
              />
            </div>
            <div className="loginButtonDiv">
              <button className="loginButton -mt-4" onClick={() => register()}>
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="loginImage border-0  text-center mt-4">
          <i>
            <h1 className="text-3xl font-semibold mt-2 mb-2 ">
              Join our community!
            </h1>
          </i>
          <p className="mt-1 mb-1 text-xl pl-1 pr-1">
            We are connecting the world, be a part of our community by
            registering on our website.
          </p>
          <img className=" w-full" src="./admin.gif" alt="" />
        </div>
        <ToastContainer />
      </div>
    </div>
    
  );
};