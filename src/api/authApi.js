import axios from "axios";
import {url} from "./apiGateway";

export const auth = {
    registration: (data) => axios.post(`${url}/auth/registration`, data, {withCredentials: true}),
    login: (data) => axios.post(`${url}/auth/login`, data, {withCredentials: true}),
    refresh: () => axios.post(`${url}/auth/refresh`, {}, {withCredentials: true}),
    logout: (userId) => axios.post(`${url}/auth/logout`, {id: userId}, {withCredentials: true}),
}