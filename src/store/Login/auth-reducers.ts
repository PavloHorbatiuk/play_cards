import { Dispatch } from "redux";
import { authAPI } from "../../api/api";

enum ACTIONS_TYPE {
    SET_LOGGED_IN = 'login/SET-IS-LOGGED-IN',
}



export type InitialStateType = typeof initialState

const initialState = {
    isLoggedIn: false


}


export const AuthReducers = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_LOGGED_IN: {
            return {
                ...state, isLoggedIn: action.payload,
            }
        }
        default:
            return state;
    }
}

export const setLoginAC = (value: boolean) => ({ type: ACTIONS_TYPE.SET_LOGGED_IN, payload: value } as const)

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
