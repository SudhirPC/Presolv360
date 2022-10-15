import React, { useEffect, useState } from "react";
import axios from "axios";
import { TaskForm } from "./Form.jsx";
import { ToastContainer, toast } from "react-toastify";
import TaskCard from "./TaskCard.jsx";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [user, setUsersetData] = useState(null);
  const [taskarr, setTaskarr] = useState(null);
  const [visible, setVisible] = useState(false);


  
// fetch user changed
  const fetchUser = () => {

    let userDetails= JSON.parse(localStorage.getItem("user"));
    axios
    .get(`http://localhost:3755/${userDetails._id}`)
    .then((res) => {
      console.log(res.data,"userData");
      setUsersetData(res?.data);
      setTaskarr(res?.data?.task)
    })
    .catch(function (err) {
      toast("Something is Wrong", {
        type: "error",
      });
    });
  };
  console.log("taskarr", taskarr);
  const visibleform = () => {
    setVisible(true);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log("dashboarddata", user);
  return (
    <div>
      <div className=" dashboardtop w-11/12 pt-2 pb-2 flex justify-around mt-4 mb-4">
        <div className="flex">
          <img className="h-14" src="./adminlogo.png" alt="" />
          <i>
            <h1 className="text-xl mt-3 ml-1">Hii {user?.name}</h1>
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
      {/* //!passed task arr */}
      {visible ? <TaskForm setVisible={setVisible} taskarr={taskarr}  /> : null}   

      <div className="dashboard w-11/12 h-auto border-2 border-red-400 ">
        <div className="dashboardtop w-full flex justify-between mt-4 mb-4">
  
          <div className="w-full">
            <i><h1>{}</h1></i>
            <div className="grid grid-cols-3 gap-2">
              {taskarr?.map((e) => {
                return (
                  // imported taskcard
                  <TaskCard key={e.id} e={e}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


