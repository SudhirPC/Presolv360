import React, { useEffect, useState } from "react";
import axios from "axios";
import { TaskForm } from "./Form.jsx";
export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [user, setUsersetData] = useState(null);
  const [visible, setVisible] = useState(false);

  const fetchTask = () => {
    setUsersetData(JSON.parse(localStorage.getItem("user")));
  };

  const visibleform = () => {
    setVisible(true);
  };

  useEffect(() => {
    fetchTask();
  }, []);
  console.log("dashboarddata", user);
  return (
    <div>
      <div className=" dashboardtop w-11/12 pt-2 pb-2 flex justify-around mt-4 mb-4">
        <div className="flex">
          <img className="h-14" src="./adminlogo.png" alt="" />
          <i>
            <h1 className="text-xl mt-3 ml-1">Hii UserName</h1>
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
      {/* <div className="Taskform">


      </div> */}
      {visible ? <TaskForm setVisible={setVisible} visible={visible}/> : null}

      <div className="dashboard w-11/12 h-auto border-2 border-red-400 ">
        <div className="dashboardtop w-full flex justify-between mt-4 mb-4">
          <div className="w-1/3">
            <img src="./todo-dash.gif" alt="" />
          </div>
          <div className="w-2/3  border-2 border-yellow-500">
            <div className="grid grid-cols-2">
              <div className="border-2 bg-red-300 h-32">DIV 1</div>
              <div className="border-2 bg-red-300 h-32">DIV 1</div>
              <div className="border-2 bg-red-300 h-32">DIV 1</div>
              <div className="border-2 bg-red-300 h-32">DIV 1</div>
              <div className="border-2 bg-red-300 h-32">DIV 1</div>
              <div className="border-2 bg-red-300 h-32">DIV 1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
