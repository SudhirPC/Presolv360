import * as types from "./actiontype.js";

const init = {
  loading: false,
  userId: null,
  error: "",
  userName: null,
  user: null,
};

export const DailyTasks = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETUSERID:
      return {
        ...state,
        user: payload,
      };

    case types.GETUSERNAME:
      return {
        ...state,
        userName: payload,
      };
    case types.LOGOUTUSER:
      return {
        ...state,
        userId: null,
        userName: null,
        user:null
      };

    default:
      return state;
  }
};
