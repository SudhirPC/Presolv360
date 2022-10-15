import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [logVisible, setVisible] = useState(false);
  const fetchTask = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
      setVisible(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    fetchTask();
  }, [logVisible]);

  const handlelogout = () => {
    window.localStorage.user = null;
    setVisible(false);
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
        <i>
          <Link to="/login">
            {" "}
            <h1 className="text-2xl font-semibold mt-4">Login</h1>
          </Link>
        </i>
        {user?.name ? (
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
            <h1 className=""></h1>
          </i>
        )}
      </div>
    </div>
  );
};
