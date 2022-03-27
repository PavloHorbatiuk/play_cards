import axios from "axios";


const instance = axios.create({
    baseURL: `http://localhost:7542/2.0/`,
})
export const authAPI = {
    Login(data: LoginParamsType) {
        return instance.post<LoginParamsType>('auth/login', data)
    },

}


export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}