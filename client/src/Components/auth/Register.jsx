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
      console.log(res.data);

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
    // <div className="flex w-4/5 registermain justify-around m-auto mt-10 h-auto">
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginFormContainer">
          <div className="loginHeader">
            <h2>Registration Page</h2>
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
              <label htmlFor="confirm password">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={user.reEnterPassword}
                name="reEnterPassword"
              />
            </div>
            <div className="loginButtonDiv">
              <button className="loginButton" onClick={() => register()}>
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
          <p className="mt-1 mb-1 text-xl ">
            We are connecting the world, be a part of our community by
            registering on our website.
          </p>
          <img className="" src="./admin.gif" alt="" />
        </div>
        <ToastContainer />
      </div>
    </div>
    // </div>
  );
};

{
  /* <div>
            <div className="register w-1/2 h-auto ml-24">
            {console.log( user)}
            <h1 className="text-2xl font-semibold">Register</h1>
            <input className="h-16 text-2xl font-semibold" type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }/>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }/>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }/>
            <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Re-enter Password" onChange={ handleChange }/>
           <button className="p-2 pl-24 pr-24 clicabledivRegsiter bg-blue-500 h-10 rounded-md text-white  text-xl" onClick={register} >Register</button>
           <ToastContainer/>
            <div>OR</div>
            <Link to="/login"> <div className="p-2 pl-36 pr-28 clicablediv bg-blue-500 h-10 rounded-md text-white  text-xl ">Login</div> </Link>
            </div>
            {/* <button className="mb-8 w-1/2 ml-48 " >
            <img src="./register.gif" alt="registergif" />
            </button> */
}
{
  /* </div>   */
}
