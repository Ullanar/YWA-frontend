const SET_LOGIN = 'SET_LOGIN'
export const SET_LOGOUT = 'SET_LOGOUT'

let initialState = {
    isLogin: false,
    accessToken: '',
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                isLogin: true,
                accessToken: action.token
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                isLogin: false,
                accessToken: '',
            }
        }
        default:
            return state
    }
}

export const setLoginAC = (token) => {
    return {
        type: SET_LOGIN,
        token: token
    }
}
export const setLogoutAC = () => {
    return {
        type: SET_LOGOUT,
    }
}
