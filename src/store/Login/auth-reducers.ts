import { Dispatch } from "redux";
import { authAPI, LoginParamsType } from "../../api/api";

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

export const setIsLoggedInAC = (value: boolean) => ({ type: ACTIONS_TYPE.SET_LOGGED_IN, payload: value } as const)

export const loginTC = (data: LoginParamsType) => {
    return (dispatch: Dispatch<ActionsType>) => {
        authAPI.Login(data)
            .then(res => {
                console.log(res.data)
                dispatch(setIsLoggedInAC(true))
            })
            .catch(error => {
                alert(error)
            })
    }
}



export type setLoginACType = ReturnType<typeof setIsLoggedInAC>;
export type ActionsType = setLoginACType
