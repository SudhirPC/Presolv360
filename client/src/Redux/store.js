import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import { DailyTasks } from "./reducer.js";

const rootReducer = combineReducers({ dailytasks: DailyTasks });
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
