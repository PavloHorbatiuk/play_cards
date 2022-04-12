import { Dispatch } from "redux";
import { authAPI, LoginParamsType, RegistrationType } from "../../api/api";
import { setStatusAC, setStatusACType } from "../loader/Loader-reducer";

enum ACTIONS_TYPE {
    SET_LOGGED_IN = 'login/SET-IS-LOGGED-IN',
    SET_DATA_USER = 'DATA/USER',
    SET_ERROR = 'SET/ERROR',
    SET_STATUS = 'SET/STATUS',
    INITIALIZED_APP = 'INITIALIZED/APP',
}
export type DataType = {
    name: string,
    avatar?: string;
    publicCardPacksCount: number;
}

export type InitialStateType = {
    isLoggedIn: boolean;
    userData: DataType;
    error: null | string,
    initializedApp: boolean;
}
const initialState = {
    isLoggedIn: false,
    userData: {
        name: '',
        avatar: '',
        publicCardPacksCount: 0
    },
    error: null,
    initializedApp: false
}


export const AuthReducers = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.INITIALIZED_APP: {
            return {
                ...state, initializedApp: action.payload
            }
        }
        case ACTIONS_TYPE.SET_DATA_USER: {
            return {
                ...state, userData: action.payload
            }
        }
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
export const initializedAppAC = (value: boolean) => ({ type: ACTIONS_TYPE.INITIALIZED_APP, payload: value } as const)


export const loginTC = (values: LoginParamsType) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setStatusAC("loading"))
        authAPI.Login(values)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    dispatch(setIsLoggedInAC(true))
                    dispatch(setDataUserAC(res.data));
                    dispatch(setStatusAC("succeeded"))
                }

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
        dispatch(setStatusAC("loading"))
        authAPI.registration(data)
            .then(res => {
                console.log(res.data.addedUser)
                dispatch(setStatusAC("succeeded"))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
                console.log('Error: ', { ...e });
                dispatch(errorAC(error))
            })
    }
}
export const initializedAppTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.status === 200) {
                console.log(res.data)
                dispatch(setIsLoggedInAC(true));
            } else {

            }
            dispatch(initializedAppAC(true));
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log('Error: ', { ...e });
            dispatch(errorAC(error))
        })
}


export type initializedAppACType = ReturnType<typeof initializedAppAC>;
export type setDataUserACType = ReturnType<typeof setDataUserAC>;
export type setLoginACType = ReturnType<typeof setIsLoggedInAC>;
export type errorACType = ReturnType<typeof errorAC>;
export type ActionsType = setLoginACType
    | setDataUserACType
    | errorACType
    | setStatusACType
    | initializedAppACType



