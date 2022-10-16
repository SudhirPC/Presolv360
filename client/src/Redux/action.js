import * as types from "./actiontype.js";
import axios from "axios";

//---------- login user ----------

export const loginUserName = (payload) => {
  return {
    type: types.GETUSERNAME,
    payload,
  };
};
export const loginUser = (payload) => {
  return {
    type: types.GETUSERID,
    payload,
  };
};

export const Logouthandleraction = (payload) => {
  return {
    type: types.LOGOUTUSER,
    payload,
  };
};

export const fetchuser = (payload) => {
  return {
    type: types.GETUSERID,
    payload,
  };
};
