import {combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";
import taskManagerReducer from "./taskManagerReducer";

let reducers = combineReducers({
    login: loginReducer,
    taskManager: taskManagerReducer,
})

let store = createStore(reducers)

export default store