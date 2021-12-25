import {combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    login: loginReducer,
    user: userReducer,
})

let store = createStore(reducers)

export default store