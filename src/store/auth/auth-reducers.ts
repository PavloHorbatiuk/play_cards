import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { authAPI, LoginParamsType, RegistrationType } from "../../api/api";
import { RequestStatusType, setStatusAC, setStatusACType } from "../loader/Loader-reducer";
import { IGlobalState } from "../state";

enum ACTIONS_TYPE {
    SET_LOGGED_IN = 'login/SET-IS-LOGGED-IN',
    SET_DATA_USER = 'DATA/USER',
    SET_ERROR = 'SET/ERROR',
    SET_STATUS = 'SET/STATUS',
    INITIALIZED_APP = 'INITIALIZED/APP',
}
export type DataType = {
    name: string,
    avatar: string;
    publicCardPacksCount: number;
}

export type InitialStateType = {
    isAuth: boolean;
    userData: DataType;
    error: null | string,
    initializedApp: boolean;
}
const initialState = {
    isAuth: false,
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
                ...state, isAuth: action.payload,
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

const checkErrors = "adf";
export const loginTC = (values: LoginParamsType): ThunkType => {
    return (dispatch) => {
        dispatch(setStatusAC("loading"))
        authAPI.Login(values)
            .then(res => {
                dispatch(getUserData());
                dispatch(setStatusAC("succeeded"))

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
                console.log(res)
                dispatch(setStatusAC("succeeded"))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
                console.log('Error: ', { ...e });
                dispatch(errorAC(error))
            })
    }
}
export const getUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(res => {
            if (res.status === 200) {
                dispatch(setDataUserAC(res.data));
                dispatch(setIsLoggedInAC(true));
            }
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log('Error: ', { ...e });
            dispatch(errorAC(error))
        })
}
export const logOutTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    return authAPI.logOut()
        .then(res => {
            if (res.status === 200) {
                dispatch(setIsLoggedInAC(false));
                dispatch(setStatusAC("succeeded"))
            }

        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log('Error: ', { ...e });
            dispatch(errorAC(error))
        })
}
export const initializedApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getUserData())
    Promise.all([promise])
        .finally(() => {
            dispatch(initializedAppAC(true))
        })
}

export type ThunkType = ThunkAction<void, IGlobalState, unknown, CommonActionType>
type CommonActionType = ActionsType

export type initializedAppACType = ReturnType<typeof initializedAppAC>;
export type setDataUserACType = ReturnType<typeof setDataUserAC>;
export type setLoginACType = ReturnType<typeof setIsLoggedInAC>;
export type errorACType = ReturnType<typeof errorAC>;
export type ActionsType = setLoginACType
    | setDataUserACType
    | errorACType
    | setStatusACType
    | initializedAppACType



