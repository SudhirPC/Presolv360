import React, { useEffect, useState } from "react";
import axios from "axios";
import { TaskForm } from "./Form.jsx";
import { ToastContainer, toast } from "react-toastify";
import TaskCard from "./TaskCard.jsx";
import { FirstHChart } from "./Statistics.jsx";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const userdata = useSelector((state) => state.dailytasks.user);
  const taskarr = userdata?.task;
  console.log("reduxUser",userdata)
  let navigate=useNavigate()
  const [data, setData] = useState([]);

  const [visible, setVisible] = useState(false);


  // console.log("taskarr", taskarr);
  const visibleform = () => {
    setVisible(true);
    navigate("/form")
  };
  return (
    <div>
      <div className=" dashboardtop w-11/12 pt-2 pb-2 flex justify-around mt-4 mb-4">
        <div className="flex">
          <img className="h-14" src="./adminlogo.png" alt="" />
          <i>
            <h1 className="text-xl mt-3 ml-1">Hii {userdata?.name}</h1>
          </i>
        </div>
        <div>
          <i>
            <h1 className="text-2xl mt-1 ml-1">Dashboard</h1>
          </i>
        </div>
        <div>
          <button
            className="border-1 border-black p-4  pt-1 pb-1 flex mt-3 ml-1 "
            onClick={visibleform}
          >
            <p className="text-2xl ">+</p> New Task
          </button>
        </div>
      </div>
      {/* //******----------task form----------- */}
      {/* {visible ? <TaskForm  taskarr={taskarr}  /> : null}    */}

      <div className="dashboard w-11/12 h-auto border-2 border-red-400 ">
        <div className="dashboardtop w-full flex justify-between mt-4 mb-4">
  
          <div className="w-full">
            <i><h1>{}</h1></i>
            <div className="grid grid-cols-3 gap-2">
              {taskarr?.map((e) => {
                return (
                  
                  <TaskCard key={e.id} e={e}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     <div className="w-1/2 h-36 m-auto mt-14">
      <div className="flex">
        <div>
              <h1>Details of Acitivity</h1>
        </div>
      <FirstHChart props={userdata}/>
      </div>
   
     </div>
    </div>
  );
};


