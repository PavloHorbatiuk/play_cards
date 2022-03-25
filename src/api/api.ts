import axios from "axios";


const instance = axios.create({
    baseURL: `http://localhost:7542/2.0/`,
})
export const authAPI = {
    Login(email: string,
        password: string,
        rememberMe: boolean) {
        return instance.post('auth')
    },

}


type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}