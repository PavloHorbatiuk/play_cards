import axios from "axios";


const instance = axios.create({
    baseURL: `http://localhost:7542/2.0/`,
})
export const authAPI = {
    Login(data: LoginParamsType) {
        return instance.post<LoginParamsType>('auth/login', data)
    },
    registration(data: RegistrationType) {
        return instance.post<RegistrationType>('auth/register', data)
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