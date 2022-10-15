import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TaskForm = (props) => {
  console.log(props)
  const navigate = useNavigate();
  const [postobj, setPostobj] = useState({
    taskname: "",
    description: "",
    developer: "",
    deadline: "",
    statustask: false,
  });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostobj({
      ...postobj,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(postobj));
    setSubmit(true);
  };

  const AddTask = () => {
    // axios
    //   .post(`http://localhost:3755/taskadd/${e.id}`, postobj)
    //   .then((res) => {
    //     console.log(res.data);
    //     toast("Task Added successfully", {
    //       type: "success",
    //     });
    //     setTimeout(() => {
    //       navigate("/dashboard");
    //     }, 3000);
    //   })
    //   .catch(function (err) {
    //     toast("Something is Wrong", {
    //       type: "error",
    //     });
    //   });
   props.setVisible(false);
  };

  const validateForm = (postobj) => {
    const error = {};
    if (!postobj.taskname && postobj.taskname.length > 100) {
      error.taskname = "Task-Title required maximum 100 characters";
    }
    if (!postobj.taskname) {
        error.taskname = "Task-Title required !";
      }
      if ( postobj.taskname.length  >100) {
        error.taskname = "Task-Title required maximum 100 characters";
      }
    if (!postobj.description && postobj.description.length > 500) {
      error.description = " Task- description required maximum 500 characters";
    }
    if (!postobj.description) {
        error.description = "Task-description required !";
      }
      if ( postobj.description.length  >500) {
        error.description = "Task-description required maximum 500 characters";
      }
    if (!postobj.developer) {
      error.developer = "Developer is required!";
    }
    if (!postobj.deadline) {
      error.deadline = "Select Task-deadline required !";
    }

    return error;
  };
  console.log("postobj", postobj);
  return (
    <div>
      <div className="loginContainer -mt-24 ">
        <div id="formtask" className="loginWrapper ">
          <div style={{ height: "auto" }} className="loginFormContainer ">
            <div className="loginHeader">
              <i>
                {" "}
                <h2>Add Task to Bucket</h2>
              </i>
            </div>
            <form
              action="AddTask"
              className="loginForm"
              onSubmit={handleSubmit}
            >
              <div className="inputElem">
                <label htmlFor="taskname">Task-Title</label>
                <input
                  type="text"
                  className="text-black"
                  placeholder="Enter Task-Title"
                  onChange={handleChange}
                  value={postobj.taskname}
                  name="taskname"
                />
                <span className="inputError">{formError.taskname}</span>
              </div>
              <div className="inputElemtextarea">
                <label htmlFor="description">Task-Description</label>
                <textarea
                  name="description"
                  rows="10"
                  cols="50"
                  className="text-black rounded-lg pb-8"
                  value={postobj.description}
                  onChange={handleChange}
                  placeholder="Enter Detail Information about Task"
                ></textarea>
                <br />
                <span className="inputError pt-14">{formError.description}</span>
              </div>
              
                <br />
              <div className="inputElem -mt-4">
                <label htmlFor="developer">Select Developer</label>
                <select
                  name="developer"
                  id=""
                  className="text-black"
                  text-black
                  onChange={handleChange}
                  value={postobj.developer}
                >
                  <option value="">Select Developer</option>
                  <option value="UserName">UserName</option>
                  <option value="prashant">Prashant Presolv360</option>
                  <option value="sudhir">Sudhir P Chavhan</option>
                  <option value="suman">Suman Giri</option>
                  <option value="bhavesh">Bhavesh Chavan</option>
                </select>

                <span className="inputError">{formError.developer}</span>
              </div>
              <div className="inputElem">
                <label htmlFor="deadline">Select Task Deadline</label>
                <input
                  type="date"
                  id="birthday"
                  name="deadline"
                  value={postobj.deadline}
                  onChange={handleChange}
                />

                <span className="inputError">{formError.deadline}</span>
              </div>

              <div className="inputElem mt-4">
                <label htmlFor="statustask">Task-Status</label>
                <select
                  name="statustask"
                  id=""
                  className="text-black"
                  onChange={handleChange}
                  value={postobj.statustask}
                >
                  <option value="">Select Task Status</option>
                  <option value={true}>Complete</option>
                  <option value={false}>Pending</option>
                </select>

        
              </div>

              <div className="loginButtonDiv">
                <button
                  className="loginButton"
                  onClick={() => {
                    AddTask();
                  }}
                >
                  Add Task
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
