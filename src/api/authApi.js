import axios from "axios";
import {url} from "./apiGateway";

export const auth = {
    registration: (data) => axios.post(`${url}/auth/registration`, data, {withCredentials: true}),
    login: (data) => axios.post(`${url}/auth/login`, data, {withCredentials: true})
}