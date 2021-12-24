import {combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";

let reducers = combineReducers({
    login: loginReducer,
})

let store = createStore(reducers)

export default store