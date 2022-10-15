import React, { useEffect, useState } from "react";

const TaskCard = ({ e }) => {
  let [taskStatus, setTaskStatus] = useState('false');
  console.log("ok",e, "OK");

  useEffect(() => {
    setTaskStatus(e?.statustask ? "true" : "false");
  }, [e]);

  return (
    <div className="text-black border-2 border-red-400 p-2 m-2">
      <div className="flex pt-2"><h1 className="text-lg">Task-Title :- </h1><p className="pt-2"> {e?.taskname}</p></div>
      <div className="flex pt-2"><h1 className="text-lg">Task-Description :- </h1><p className="pt-2"> {e?.description}</p></div>
      <div className="flex pt-2"><h1 className="text-lg">Task-Developer :- </h1><p className="pt-2"> {e?.developer}</p></div>
      <div className="flex pt-2"><h1 className="text-lg">Task-Deadline :- </h1><p className="pt-2"> {e?.deadline}</p></div>
      <div className="flex">
      Task-Status:- {e.statustask? <button style={{backgroundColor:"green"}} className="pt-1  pb-1 pr-4 pl-4 ">Complete</button> : <button style={{backgroundColor:"red"}} className="pt-1 pb-1 pr-4 pl-4 bg-red-700">Pending</button>}
      </div>
      
    </div>
  );
};

export default TaskCard;
