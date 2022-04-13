import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:7542/2.0/`,
})
export const authAPI = {
    Login(values: LoginParamsType) {
        return instance.post('auth/login', values)
    },
    registration(data: RegistrationType) {
        return instance.post('auth/register', data)
    },
    me() {
        return instance.post<ResponsType>('auth/me', {})
    },
    logOut() {
        return instance.delete('auth/me')
    }


}

export type ResponsType = {
    _id: string;
    email: string;
    name: string;
    avatar: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error: string;

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