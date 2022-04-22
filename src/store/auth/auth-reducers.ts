import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { authAPI, LoginParamsType, RegistrationType } from "../../api/api";
import { setStatusAC, setStatusACType } from "../loader/Loader-reducer";
import { IGlobalState } from "../state";

enum ACTIONS_TYPE {
    SET_LOGGED_IN = 'login/SET-IS-LOGGED-IN',
    SET_DATA_USER = 'DATA/USER',
    SET_ERROR = 'SET/ERROR',
    SET_STATUS = 'SET/STATUS',
    INITIALIZED_APP = 'INITIALIZED/APP',
    SET_REGISTRATION = 'SET/REGISTRATION'
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
    isRegistration: boolean
}
const initialState = {
    isAuth: false,
    userData: {
        name: '',
        avatar: '',
        publicCardPacksCount: 0
    },
    error: null,
    initializedApp: false,
    isRegistration: false
}


export const AuthReducers = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_REGISTRATION: {
            return {
                ...state, isRegistration: action.payload
            }
        }
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
export const setRegistrationAC = (value: boolean) => ({ type: ACTIONS_TYPE.SET_REGISTRATION, payload: value } as const)
export const errorAC = (error: null | string) => ({ type: ACTIONS_TYPE.SET_ERROR, payload: error } as const)
export const initializedAppAC = (value: boolean) => ({ type: ACTIONS_TYPE.INITIALIZED_APP, payload: value } as const)


const errorFunction = (e: any, dispatch: Dispatch) => {
    const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
    console.log('Error: ', { ...e });
    dispatch(errorAC(error))
    dispatch(setStatusAC("succeeded"))
}

export const loginTC = (values: LoginParamsType): ThunkType => async (dispatch) => {
    dispatch(setStatusAC("loading"))
    try {
        const user = await authAPI.Login(values)
        const { statusText, status } = user
        console.log(user)
        statusText === 'OK' ? dispatch(getUserData()) : console.log(status)
        dispatch(setStatusAC("succeeded"))

    } catch (e: any) {
        errorFunction(e, dispatch)
    }

}

export const registrationTC = (data: RegistrationType): ThunkType => async (dispatch) => {
    dispatch(setStatusAC("loading"))
    try {
        const user = await authAPI.registration(data)
        const { statusText, status } = user
        statusText === 'Created' ? dispatch(setRegistrationAC(true)) : console.log(status)
        setStatusAC("succeeded")
    } catch (e: any) {
        errorFunction(e, dispatch)
    }
}
export const getUserData = () => async (dispatch: Dispatch) => {

    try {
        const dataUser = await authAPI.me()
        const { statusText, status, data } = dataUser
        statusText === 'OK' ? dispatch(setDataUserAC(data)) : console.log(status)
        dispatch(setIsLoggedInAC(true));
    } catch (e: any) {
        errorFunction(e, dispatch)
    }

}

export const logOutTC = () => async (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    try {
        const login = await authAPI.logOut()
        const { statusText, status } = login
        statusText === "OK" ? dispatch(setIsLoggedInAC(false)) : console.log(status)
        dispatch(setStatusAC("succeeded"))
    } catch (e: any) {
        errorFunction(e, dispatch)
    }

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
export type registrationACType = ReturnType<typeof setRegistrationAC>;
export type ActionsType = setLoginACType
    | setDataUserACType
    | errorACType
    | setStatusACType
    | initializedAppACType
    | registrationACType



