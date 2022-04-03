import { Dispatch } from "redux";
import { authAPI, LoginParamsType, RegistrationType } from "../../api/api";

enum ACTIONS_TYPE {
    SET_LOGGED_IN = 'login/SET-IS-LOGGED-IN',
    SET_DATA_USER = 'DATA/USER',
    SET_ERROR = 'SET/ERROR'
}

type DataType = {
    name: string,
    avatar?: string;
    publicCardPacksCount: number;
}

// export type InitialStateType = typeof initialState
export type InitialStateType = {
    isLoggedIn: boolean;
    data: Array<DataType>;
    error: null | string
}
const initialState = {
    isLoggedIn: false,
    data: [],
    error: null
}


export const AuthReducers = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_ERROR: {
            return {
                ...state, error: action.payload
            }
        }
        case ACTIONS_TYPE.SET_LOGGED_IN: {
            return {
                ...state, isLoggedIn: action.payload,
            }
        }
        default:
            return state;
    }
}

export const setDataUserAC = (data: DataType) => ({ type: ACTIONS_TYPE.SET_DATA_USER, payload: data } as const)
export const setIsLoggedInAC = (value: boolean) => ({ type: ACTIONS_TYPE.SET_LOGGED_IN, payload: value } as const)
export const setRegistrationAC = (value: boolean) => ({ type: ACTIONS_TYPE.SET_LOGGED_IN, payload: value } as const)
export const errorAC = (error: null | string) => ({ type: ACTIONS_TYPE.SET_ERROR, payload: error } as const)

export const loginTC = (data: LoginParamsType) => {
    return (dispatch: Dispatch<ActionsType>) => {
        authAPI.Login(data)
            .then(res => {
                console.log(res.data)
                dispatch(setIsLoggedInAC(true));
                // dispatch(setDataUserAC(res.data))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
                console.log('Error: ', { ...e });
                dispatch(errorAC(error))
            })
    }
}
export const registrationTC = (data: RegistrationType) => {
    return (dispatch: Dispatch<ActionsType>) => {
        authAPI.registration(data)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                dispatch(errorAC(error))
            })
    }
}


export type setDataUserACType = ReturnType<typeof setDataUserAC>;
export type setLoginACType = ReturnType<typeof setIsLoggedInAC>;
export type errorACType = ReturnType<typeof errorAC>;
export type ActionsType = setLoginACType
    | setDataUserACType
    | errorACType



