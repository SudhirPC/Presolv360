import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar flex w-full h-24 border-2 border-t-0 mt-0 text-center border-white justify-between ">
      <div  className="w-1/3 h-full pl-4 pt-2">
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
          <h1 className="text-4xl font-semibold mt-4 underline">Daily-Task-App</h1>
        </i>
      </div>
      <div className="w-1/3 flex justify-around">
        <i>
        <Link to="/"><h1 className="text-2xl font-semibold mt-4">Register</h1></Link>   
        </i>
        <i>
        <Link to="/login"> <h1 className="text-2xl font-semibold mt-4">Login</h1></Link> 
        </i>  
      </div>
    </div>
  );
};
