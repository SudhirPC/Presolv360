import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux"

import thunk from "redux-thunk"
import {DailyTasks} from "./reducer.js";

const rootReducer = combineReducers({dailytasks:DailyTasks});


export const store = legacy_createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

