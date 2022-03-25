import { Dispatch } from "redux";
import { authAPI } from "../api/api";

enum ACTIONS_TYPE {
    SET_LOGIN = 'SET/LOGIN',
}



export type AuthReducers = typeof initialState

const initialState = {
    email: '',
    name: '',
    avatar: '',


}


export const AuthReducers = (state: AuthReducers = initialState, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_LOGIN: {
            return {
                ...state, Email: action.payload,
            }
        }
        default:
            return state;
    }
}

export const setLoginAC = (name: string) => ({ type: ACTIONS_TYPE.SET_LOGIN, payload: name } as const)

export const authThunk = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.Login(email, password, rememberMe)
            .then(res => {
                console.log(res.data)
                // dispatch(setLoginAC())
            })
            .catch(error => {
                alert(error)
            })
    }
}



export type setLoginACType = ReturnType<typeof setLoginAC>;
export type ActionsType = setLoginACType
