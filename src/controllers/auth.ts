import { ILoginData, ILoginResponse } from "../types";
import axios from "./axios";



class Auth {
    static login(data: ILoginData) {
        return axios.post<ILoginResponse>('/auth/login', data)
    }
}


export default Auth

