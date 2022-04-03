import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AuthReducers } from "./auth/auth-reducers";



const reducers = combineReducers({
    login: AuthReducers
})
export type IGlobalState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<IGlobalState> = useSelector
export const store = createStore(reducers, applyMiddleware(thunk));