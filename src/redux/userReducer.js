import {SET_LOGOUT} from "./loginReducer";

const SET_USER = 'SET_USER'

let initialState = {
    user: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                user: null
            }
        }
        default:
            return state
    }
}

export const setUserAC = (data) => {
    return {
        type: SET_USER,
        user: data
    }
}