import axios from "axios";



const instance = axios.create({
    baseURL: `http://localhost:7542/2.0/`,
})
export const authAPI = {
    Login(values: LoginParamsType) {
        return instance.post('auth/login', values)
    },
    registration(data: RegistrationType) {
        return instance.post('auth/register', data)
    }

}


export type RegistrationType = {
    email: string,
    password: string
}
export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}