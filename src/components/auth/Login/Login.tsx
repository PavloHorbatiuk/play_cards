import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../../store/state'
import { LoginPage } from '../../featers/LoginPage'
import s from './../Login/Login.module.css'

function Login() {

    const IsloggedIn = useAppSelector(state => state.login)
    if (IsloggedIn.isLoggedIn) {
        return <Navigate to='/' />
    }

    return (
        <div className={s.generalContainer}>
            <LoginPage />
        </div>
    )
}

export default Login