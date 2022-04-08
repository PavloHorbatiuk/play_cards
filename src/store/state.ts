import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AuthReducers } from "./auth/auth-reducers";
import { StatusReducers } from "./loader/Loader-reducer";



const reducers = combineReducers({
    login: AuthReducers,
    features: StatusReducers
})
export type IGlobalState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<IGlobalState> = useSelector
export const store = createStore(reducers, applyMiddleware(thunk));