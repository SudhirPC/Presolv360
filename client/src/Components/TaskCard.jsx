import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchuser } from "../Redux/action.js";

const TaskCard = ({ e }) => {
  const userdata = useSelector((state) => state.dailytasks.user);
  console.log("navbar", userdata._id);
  // console.log("ok", e, "OK");
  const dispatch = useDispatch();
  const togglestatus = (statuses, ids) => {
    axios
      .patch(
        `https://presolv360bysudhir.herokuapp.com/taskadd/${userdata._id}/update`,
        { id: ids, status: !statuses }
      )
      .then((res) => {
        console.log(res.data, "userData");
        setTimeout(() => {
          fetchUser();
        }, 1000);
      })
      .catch(function (err) {
        toast("Something is Wrong", {
          type: "error",
        });
      });
  };

  const fetchUser = () => {
    axios
      .get(`https://presolv360bysudhir.herokuapp.com/${userdata?._id}`)
      .then((res) => {
        console.log("restaskcard", res);
        dispatch(fetchuser(res.data));
      })
      .catch(function (err) {
        toast("Something is Wrong", {
          type: "error",
        });
      });
  };

  return (
    <div className="text-black border-2 border-red-400 bg-white p-2 m-2 overflow-hidden rounded-lg">
      <div className="flex pt-2">
        <h1 className="text-lg">Task-Title :- </h1>
        <p className="pt-2"> {e?.taskname}</p>
      </div>
      <div className="flex pt-2">
        <h1 className="text-lg">Task-Description :- </h1>
        <p className="pt-2"> {e?.description}</p>
      </div>
      <div className="flex pt-2">
        <h1 className="text-lg">Task-Developer :- </h1>
        <p className="pt-2"> {e?.developer}</p>
      </div>
      <div className="flex pt-2">
        <h1 className="text-lg">Task-Deadline :- </h1>
        <p className="pt-2"> {e?.deadline}</p>
      </div>
      <div className="flex">
        Task-Status:-{" "}
        {e.statustask ? (
          <button
            style={{ backgroundColor: "green" }}
            className="pt-1  pb-1 pr-4 pl-4 "
            onClick={() => {
              togglestatus(e.statustask, e.id);
            }}
          >
            Complete
          </button>
        ) : (
          <button
            style={{ backgroundColor: "red" }}
            className="pt-1 pb-1 pr-4 pl-4 bg-red-700"
            onClick={() => {
              togglestatus(e.statustask, e.id);
            }}
          >
            Pending
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
