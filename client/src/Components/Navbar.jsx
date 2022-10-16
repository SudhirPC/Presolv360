import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logouthandleraction } from "../Redux/action.js";
export const Navbar = () => {

const userdata = useSelector((state) => state.dailytasks.user);
console.log("navbar",userdata);
  const [user, setUser] = useState(null);
  const [logVisible, setVisible] = useState(false);
  let dispatch=useDispatch()
  const fetchTask = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
      setVisible(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    fetchTask();
  }, [logVisible]);

  const handlelogout = () => {
    setVisible(false);
    dispatch(Logouthandleraction());
    navigate("/");
  };
  return (
    <div className="navbar flex w-full h-20 border-2 border-t-0 mt-0 text-center border-white justify-between ">
      <div className="w-1/3 h-full pl-4 pt-2">
        <Link to="/">
          <img
            className=" h-16 border-b-2 border-white"
            src="./presolv360.jpg"
            alt="presolv360"
          />
        </Link>
      </div>
      <div className="w-1/3 h-full pl-4 text-center ">
        <i>
          <h1 className="text-4xl font-semibold mt-4 underline">
            Daily-Task-App
          </h1>
        </i>
      </div>
      <div className="w-1/3 flex justify-around">
        <i>
          <Link to="/">
            <h1 className="text-2xl font-semibold mt-4">Register</h1>
          </Link>
        </i>
      
        {userdata?.name ? (
          <i>
            <h1
              className="text-2xl font-semibold mt-4 cursor-pointer"
              onClick={handlelogout}
            >
              Log-Out
            </h1>
          </i>
        ) : (
          <i>
          <Link to="/login">
            {" "}
            <h1 className="text-2xl font-semibold mt-4">Login</h1>
          </Link>
        </i>
        )}
      </div>
    </div>
  );
};
