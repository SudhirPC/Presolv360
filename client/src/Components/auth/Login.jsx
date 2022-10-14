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
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginFormContainer">
          <div className="loginHeader">
            <h2>Login to Continue</h2>
          </div>
          <form action="login" className="loginForm" onSubmit={handleSubmit}>
            <div className="inputElem">
              <label htmlFor="email">Enter Email Id</label>
              <input
                type="text"
                placeholder="email address"
                onChange={handleChange}
                value={user.email}
                name="email"
              />
              <span className="inputError">{formError.email}</span>
            </div>
            <div className="inputElem">
              <label htmlFor="Enter Password">Enter Password</label>
              <input
                type="password"
                placeholder="password"
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
                placeholder="reEnterPassword"
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
        <div className="loginImage">
          <img src="./admin.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

{
  /* <div className=" flex w-4/5 justify-around m-auto mt-16 mb-16">
//       <div className="login mb-28 w-1/2 ml-48 ">
//       {console.log(user)}
//       <h1 className="text-2xl font-semibold">Login</h1>
//       <input 
//         type="text"
//         name="email"
//         value={user.email}
//         onChange={handleChange}
//         placeholder="Enter your Email"
//       ></input>
//       <input
//         type="password"
//         name="password"
//         value={user.password}
//         onChange={handleChange}
//         placeholder="Enter your Password"
//       ></input>
//       <div >
//         {" "}
//         <button
//           onClick={() => {
//             login();
//           }}
//           className="p-2 pl-28 pr-28 bg-blue-500 h-10 rounded-md text-white  text-xl "
//         >
//           Login
//         </button>
//         <ToastContainer/>
//       </div>
//       <div>OR</div>
//       <Link to="/">
//         {" "}
//         <button className="p-2 pl-28 pr-24 bg-blue-500 h-10 rounded-md text-white  text-xl ">
//           Register
//         </button>{" "}
//       </Link>
//       </div>
//       <div className="w-1/2 ml-24">
//     <img className="h-96 w-96" src="./login.gif" alt="logingif" />
// </div>
//     </div>*/
}
