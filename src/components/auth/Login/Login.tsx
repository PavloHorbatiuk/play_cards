import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../../store/state'
import LinearDeterminate from '../../featers/loader/LinearDeterminate'
import { LoginPage } from '../../featers/LoginPage'
import s from './../Login/Login.module.css'

function Login() {

    const authState = useAppSelector(state => state.login)


    if (authState.isLoggedIn) {
        return <Navigate to='/' />
    }

    return (
        <div className={s.generalContainer}>

            <LoginPage />
        </div>
    )
}

export default Login